import React from "react";
import { Col, Row } from "react-bootstrap";
import { UsePostService } from "../../../Hooks/service-Hooks/UsePostService";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AdminAddService = () => {
      const { t } = useTranslation();
  
  const {
    img,
    setName,
    onchecked,
    setDescription,
    onImageChange,
    handelPost,
  } = UsePostService();

  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">{t("Admin:service.Add.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2"> {t("Admin:service.Add.photo")}</div>
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
          <div className="form-input-text">
            <label className="form-label" for="name">
            {t("Admin:service.Add.name")}
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:service.Add.placeHolderName")}
            />
            <label className="form-label" for="job">
            {t("Admin:service.Add.Description")}
            </label>
            <textarea
              id="job"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:service.Add.placeHolderdes")}
              rows="5"
              cols="33"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="check-comming-soon">
            <input onClick={onchecked} id="comming-soon" type="checkbox" />
            <label for="comming-soon">{t("Admin:service.Add.commingSoon")}</label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelPost} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:service.Add.Add")}
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminAddService;
