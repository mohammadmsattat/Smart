import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseDeleteOneEmployee } from "../../../Hooks/Employees-Hooks/UseDeleteEmployee";
import { UseGetAllEmployees } from "../../../Hooks/Employees-Hooks/UseGetAllEmployees";
import Model from "../Model";

const AdminManegmentEmployee = () => {
  const [team] = UseGetAllEmployees();

  const {SubmitDelete, show, handleClose, handleShow}= UseDeleteOneEmployee();
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
      <h3>Manegment Employees</h3>
      <Link to="/admin/addemployee" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">Add Empolyee</button>
        </div>
      </Link>
      <div className="row">
        {team.map((item, index) => {
          return (
            <Card key={index} style={{ width: "18rem", margin: ".4em" }}>
              <Card.Img variant="top" src={item.imageCover} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.job}</Card.Text>
                <div className="manage-btn">
                  <Button
                    onClick={() => deleteModel(item._id)}
                    variant="primary"
                  >
                    Delete
                  </Button>

                  <Button variant="primary">
                    <Link
                      to={`/admin/edit-employee/${item._id}`}
                      style={{ color: "white" }}
                    >
                      Update
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
