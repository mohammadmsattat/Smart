import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseDeleteOnePartner } from "../../../Hooks/Partners-Hooks/UseDeletePartner";
import { UseGetAllPartners } from "../../../Hooks/Partners-Hooks/UseGetPartners";
import Model from "../Model";
import { useTranslation } from "react-i18next";

const AdminManegmentPartners = () => {
  const { t } = useTranslation();

  const [partner] = UseGetAllPartners();

  const { SubmitDelete, show, handleClose, handleShow } = UseDeleteOnePartner();
  const [Delid, setDelId] = useState("");

  const deleteModel = (id) => {
    setDelId(id);
    handleShow();
  };

  return (
    <div>
      <Model
        show={show}
        handleClose={handleClose}
        SubmitDelete={SubmitDelete}
        Delid={Delid}
      />

      <h3>{t("Admin:partner.manegment.head")}</h3>

      <Link to="/admin/add-partner" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">{t("Admin:partner.manegment.Add")}</button>
        </div>
      </Link>

      <div className="row">
        {partner.map((item, index) => {
          return (
            <Card key={index} className="admin-card">
              <Card.Img variant="top" src={item.logo} />
              <Card.Body>
                <div className="manage-btn">
                  <Button
                    onClick={() => deleteModel(item._id)}
                    variant="primary"
                  >
                    {t("Admin:partner.manegment.Delete")}
                  </Button>
                  <Button variant="primary">
                    <Link
                      to={`/admin/edit-partner/${item._id}`}
                      style={{ color: "white" }}
                    >
                      {t("Admin:partner.manegment.update")}
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AdminManegmentPartners;
