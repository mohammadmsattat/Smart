import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trimString } from "../../../utils";
import { UseDeleteOneOffice } from "../../../Hooks/office-Hooks/UseDeleteOffice";
import { UseGetAllOffice } from "../../../Hooks/office-Hooks/UseGetAllOffice";
import Model from "../Model";
import { useTranslation } from "react-i18next";

const AdminManegmentOffices = () => {
      const { t } = useTranslation();
  
  const [offices] = UseGetAllOffice();

  const { SubmitDelete, show, handleClose, handleShow } = UseDeleteOneOffice();
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

      <h3>{t("Admin:office.manegment.head")}</h3>

      <Link to="/admin/add-office" >
        <div>
          <button className="add-btn-2">{t("Admin:office.manegment.Add")}</button>
        </div>
      </Link>

      <div className="row">
        {offices
          ? offices.map((item, index) => {
              return (
                <Card key={index} className="admin-card">
                  <Card.Img variant="top" src={item.imageCover} />
                  <Card.Body>
                    <Card.Title className="card-head">
                      {item.location}
                    </Card.Title>
                    <Card.Text>{trimString(item.description)}</Card.Text>
                    <div className="manage-btn">
                      <Button
                        onClick={() => deleteModel(item._id)}
                        variant="primary"
                      >
                        {t("Admin:office.manegment.Delete")}
                      </Button>
                      <Button variant="primary">
                        <Link
                          to={`/admin/edit-office/${item._id}`}
                          style={{ color: "white" }}
                        >
                          {t("Admin:office.manegment.update")}
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AdminManegmentOffices;
