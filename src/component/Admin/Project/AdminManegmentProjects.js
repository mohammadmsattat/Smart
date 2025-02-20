import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trimString } from "../../../utils";
import { UseDeleteOneProject } from "../../../Hooks/project-Hooks/UseDeleteProject";
import { UseGetAllProjects } from "../../../Hooks/project-Hooks/UseGetAllProjects";
import Model from "../Model";
import { useTranslation } from "react-i18next";

const AdminManegmentProjects = () => {
  const { t, i18n } = useTranslation();

  const [projects] = UseGetAllProjects();

  const { SubmitDelete, show, handleClose, handleShow } = UseDeleteOneProject();
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

      <h3>{t("Admin:project.manegment.head")}</h3>

      <Link to="/admin/add-project" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">
            {t("Admin:project.manegment.Add")}
          </button>
        </div>
      </Link>

      <div className="row">
        {projects ? (
          projects.map((item, index) => {
            return (
              <Card key={index} className="admin-card">
                <Card.Img variant="top" src={item.imageCover} />
                {console.log(item.imageCover)}
                <Card.Body>
                  <Card.Title>
                    <Link to={`/project/${item._id}`}>
                      {i18n.language === "en" ? item.name_en : item.name_ar}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {i18n.language === "en"
                      ? trimString(item.description_en)
                      : trimString(item.description_ar)}
                  </Card.Text>
                  <div className="manage-btn">
                    <Button
                      onClick={() => deleteModel(item._id)}
                      variant="primary"
                    >
                      {t("Admin:project.manegment.Delete")}
                    </Button>

                    <Button variant="primary">
                      <Link
                        to={`/admin/edit-project/${item._id}`}
                        style={{ color: "white" }}
                      >
                        {t("Admin:project.manegment.update")}
                      </Link>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h2>No Projects</h2>
        )}
      </div>
    </div>
  );
};

export default AdminManegmentProjects;
