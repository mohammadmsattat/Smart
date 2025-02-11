import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trimString } from "../../../utils";
import { UseDeleteOneProject } from "../../../Hooks/project-Hooks/UseDeleteProject";
import { UseGetAllProjects } from "../../../Hooks/project-Hooks/UseGetAllProjects";
import Model from "../Model";

const AdminManegmentProjects = () => {
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

      <h3>Manegment Projects</h3>

      <Link to="/admin/addproject" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">Add project</button>
        </div>
      </Link>

      <div className="row">
        {projects ? (
          projects.map((item, index) => {
            return (
              <Card key={index} style={{ width: "18rem", margin: ".4em" }}>
                <Card.Img variant="top" src={item.imageCover} />
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/project/${item._id}`}
                      style={{ color: "black" }}
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
                      Delete
                    </Button>

                    <Button variant="primary">
                      <Link
                        to={`/admin/edit-project/${item._id}`}
                        style={{ color: "white" }}
                      >
                        Update
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
