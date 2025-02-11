import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseDeleteOnePartner } from "../../../Hooks/Partners-Hooks/UseDeletePartner";
import { UseGetAllPartners } from "../../../Hooks/Partners-Hooks/UseGetPartners";
import Model from "../Model";

const AdminManegmentPartners = () => {
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

      <h3>Manegment Partners</h3>

      <Link to="/admin/addpartner" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">Add partner</button>
        </div>
      </Link>

      <div className="row">
        {partner.map((item, index) => {
          return (
            <Card key={index} style={{ width: "18rem", margin: ".4em" }}>
              <Card.Img variant="top" src={item.imageCover} />
              <Card.Body>
                <div className="manage-btn">
                  <Button
                    onClick={() => deleteModel(item._id)}
                    variant="primary"
                  >
                    Delete
                  </Button>
                  <Button variant="primary">
                    <Link
                      to={`/admin/edit-partner/${item._id}`}
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

export default AdminManegmentPartners;
