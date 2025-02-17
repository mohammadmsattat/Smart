import React, { useState } from "react";
import { UseDeleteOneSrevice } from "../../../Hooks/service-Hooks/UseDeleteService";
import { UseGetAllServices } from "../../../Hooks/service-Hooks/UseGetAllServices";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { trimString } from "../../../utils";
import Model from "../Model";
import { useTranslation } from "react-i18next";

const AdminManegmentService = () => {
  const { t } = useTranslation();

  const [services] = UseGetAllServices();

  const { SubmitDelete, show, handleClose, handleShow } = UseDeleteOneSrevice();
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

      <h3>{t("Admin:service.manegment.head")}</h3>

      <Link to="/admin/add-service" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">{t("Admin:service.manegment.Add")}</button>
        </div>
      </Link>

      <div className="row">
        {services ? (
          services.map((item, index) => {
            return (
              <Card key={index} className="admin-card">
                <Card.Img variant="top" src={item.imageCover} />
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/service/${item._id}`}
                    
                    >
                      {item.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>{trimString(item.description)}</Card.Text>
                  <div className="manage-btn">
                    <Button
                      onClick={() => deleteModel(item._id)}
                      variant="primary"
                    >
                      {t("Admin:service.manegment.Delete")}
                    </Button>
                    <Button variant="primary">
                      <Link
                        to={`/admin/edit-service/${item._id}`}
                        style={{ color: "white" }}
                      >
                        {t("Admin:service.manegment.update")}
                      </Link>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h2>No Services</h2>
        )}
      </div>
    </div>
  );
};

export default AdminManegmentService;
