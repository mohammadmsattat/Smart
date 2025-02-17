import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Model({ show, handleClose, SubmitDelete, Delid }) {
    const { t } = useTranslation();
  
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
            <Modal.Title style={{marginBottom:'3.5em'}}>{t("Admin:model.head")} </Modal.Title>
          </Modal.Header>

       

          <Modal.Footer >
            <Button onClick={() => handleClose()} variant="secondary">
            {t("Admin:model.close")}
            </Button>
            <Button onClick={() => SubmitDelete(Delid)} variant="primary" style={{marginLeft:'.7em'}}>
            {t("Admin:model.deleet")}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Model;
