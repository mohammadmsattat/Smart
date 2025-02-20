import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdatePartner } from "../../../Hooks/Partners-Hooks/UseUpdatePartner";
import { useTranslation } from "react-i18next";

const AdminEditPartner = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const { img, onImageChange, handelupdate } = UseUpdatePartner(id);

  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4 info-head-ar">{t("Admin:partner.update.head")}</div>
        <Col sm="8">
          <div className="text-form pb-2 info-head-ar"> {t("Admin:partner.Add.head")}</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="140px"
                width="160px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              onChange={onImageChange}
              style={{ display: "none" }}
              type="file"
              name="photo"
              id="upload-photo"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:partner.update.update")}
          </button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditPartner;
