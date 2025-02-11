import React from "react";
import { Button, Modal } from "react-bootstrap";

function Model({ show, handleClose, SubmitDelete, Delid }) {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: "2",
          backgroundColor: "rgb(212 212 212)",
          borderRadius: ".8em",
          width: "50%",
          padding: "1.3em",
          top: "20%",
          right: "20%",

          display: show,
        }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Delete Service</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are You Shure To Delete it</p>
          </Modal.Body>

          <Modal.Footer >
            <Button onClick={() => handleClose()} variant="secondary">
              Close
            </Button>
            <Button onClick={() => SubmitDelete(Delid)} variant="primary" style={{marginLeft:'.7em'}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Model;
