import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdateOffice } from "../../../Hooks/office-Hooks/UseUpdateOffice";
import { useTranslation } from "react-i18next";

const AdminEditOffice = () => {
  const { t } = useTranslation();

  const { id } = useParams();
const {
  img,
  location_en,
  location_ar,
  onChangeLocation_en,
  onChangeLocation_ar,
  onChangeImage,
  setImg,
  Address_en,
  Address_ar,
  onChangeAddress_en,
  onChangeAddress_ar,
  onImageChange,
  handelupdate,
  response,
  Loading,
}=UseUpdateOffice(id);
  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4 info-head-ar">{t("Admin:office.update.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2 info-head-ar">{t("Admin:office.Add.photo")}</div>
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
              onChange={onChangeImage}
            />
          </div>
          <div className="form-input-text">
          <Row>
            <Col>
            <label className="form-label" for="location_en">
            {t("Admin:office.Add.location-en")}
            </label>
            <input
              id="location_en"
              type="text"
              value={location_en}
              onChange={onChangeLocation_en}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:office.Add.placeHolderName")}
            />
            </Col>
            <Col>
            <label className="form-label" for="location_ar">
            {t("Admin:office.Add.location-ar")}
            </label>
            <input
              id="location_ar"
              type="text"
              value={location_ar}
              onChange={onChangeLocation_ar}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:office.Add.placeHolderName")}
            />
            </Col>
          </Row>
          
            <label className="form-label" for="Address_en">
            {t("Admin:office.Add.Description-en")}
            </label>
            <textarea
              id="Address_en"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:office.Add.placeHolderdes")}
              rows="5"
              cols="33"
              value={Address_en}
              onChange={onChangeAddress_en}
            />
                <label className="form-label" for="Address_ar">
            {t("Admin:office.Add.Description-ar")}
            </label>
            <textarea
              id="Address_ar"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:office.Add.placeHolderdes")}
              rows="5"
              cols="33"
              value={Address_ar}
              onChange={onChangeAddress_ar}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 "> {t("Admin:office.update.update")}</button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditOffice;
