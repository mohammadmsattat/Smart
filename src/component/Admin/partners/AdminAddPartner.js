import React from "react";
import { Col, Row } from "react-bootstrap";
import { UsePostPartners } from "../../../Hooks/Partners-Hooks/usePostPartners";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AdminAddPartner = () => {
  const { t } = useTranslation();

  const { img, onImageChange, handelPost } = UsePostPartners();

  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">{t("Admin:partner.Add.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2"> {t("Admin:partner.Add.photo")}</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelPost} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:partner.Add.Add")}
          </button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminAddPartner;
