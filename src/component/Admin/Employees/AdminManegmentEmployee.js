import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseDeleteOneEmployee } from "../../../Hooks/Employees-Hooks/UseDeleteEmployee";
import { UseGetAllEmployees } from "../../../Hooks/Employees-Hooks/UseGetAllEmployees";
import Model from "../Model";
import { useTranslation } from "react-i18next";

const AdminManegmentEmployee = () => {
  const { t } = useTranslation();

  const [team] = UseGetAllEmployees();

  const { SubmitDelete, show, handleClose, handleShow } =
    UseDeleteOneEmployee();
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
      <h3>{t("Admin:Employee.manegment.head")}</h3>
      <Link to="/admin/add-employee" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">
            {t("Admin:Employee.manegment.Add")}
          </button>
        </div>
      </Link>
      <div className="row">
        {team.map((item, index) => {
          return (
            <Card key={index} className="admin-card">
              <Card.Img variant="top" src={item.imageCover} />
              <Card.Body>
                <Card.Title className="card-head">{item.name}</Card.Title>
                <Card.Text>{item.job}</Card.Text>
                <div className="manage-btn">
                  <Button
                    onClick={() => deleteModel(item._id)}
                    variant="primary"
                  >
                    {t("Admin:Employee.manegment.Delete")}
                  </Button>

                  <Button variant="primary">
                    <Link
                      to={`/admin/edit-employee/${item._id}`}
                      style={{ color: "white" }}
                    >
                      {t("Admin:Employee.manegment.update")}
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

export default AdminManegmentEmployee;
