import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { UseUpdataInformations } from "../../../Hooks/OurInformation-Hooks/UseUpdateInformations";
import { useTranslation } from "react-i18next";

const AdminEditInformation = () => {
  const { t } = useTranslation();

  const {
    email,
    phone,
    facebook,
    instagram,
    Linkedin,
    x,

    onChangeEmail,
    onChangePhone,
    onChangeFacebook,
    onChangeInsta,
    onChangeLkedinn,
    onChangeX,
    handelupdate,
  } = UseUpdataInformations();
  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text  info-head-ar pb-4">{t("Admin:information.head")} </div>
        <Col sm="8">
          <div></div>
          <div className="form-input-text">
            <label className="form-label" for="email">
            {t("Admin:information.email")}
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={onChangeEmail}
              className="input-form d-block mt-3 px-3"
            />
            <label className="form-label" for="phone">
            {t("Admin:information.phone")}
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={onChangePhone}
              className="input-form d-block mt-3 px-3"
            />
            <label className="form-label" for="facebook">
            {t("Admin:information.facebook")}
            </label>
            <input
              id="facebook"
              type="text"
              value={facebook}
              onChange={onChangeFacebook}
              className="input-form d-block mt-3 px-3"
            />
            <label className="form-label" for="instagram">
            {t("Admin:information.instagram")}
            </label>
            <input
              id="instagram"
              type="text"
              value={instagram}
              onChange={onChangeInsta}
              className="input-form d-block mt-3 px-3"
            />
            <label className="form-label" for="linkedin">
            {t("Admin:information.Linkein")}
            </label>
            <input
              id="linkedin"
              type="text"
              value={Linkedin}
              onChange={onChangeLkedinn}
              className="input-form d-block mt-3 px-3"
            />
            <label className="form-label" for="x">
            {t("Admin:information.x")}
            </label>
            <input
              id="x"
              type="text"
              value={x}
              onChange={onChangeX}
              className="input-form d-block mt-3 px-3"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:information.update")}
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditInformation;
