import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdateEmployee } from "../../../Hooks/Employees-Hooks/UseUpdateEmployee";
import { useTranslation } from "react-i18next";

const AdminEditEmployee = () => {
  const { t } = useTranslation();

  const { id } = useParams();
const {
  img,
  name_en,
  name_ar,
  onChangeName_en,
  onChangeName_ar,
  onChangeImage,
  setImg,
  job_en,
  job_ar,
  onChangejob_en,
  onChangejob_ar,
  onImageChange,
  handelupdate,
  response,
  Loading,
}=UseUpdateEmployee(id);
  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4" info-head-ar>{t("Admin:Employee.update.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2 info-head-ar"> {t("Admin:Employee.Add.photo")}</div>
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
            <label className="form-label" for="name">
            {t("Admin:Employee.Add.name-en")}
            </label>
            <input
              id="name"
              type="text"
              value={name_en}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderName")}
              onChange={onChangeName_en}
            />
            </Col>
            <Col>
            <label className="form-label" for="name">
            {t("Admin:Employee.Add.name-ar")}
            </label>
            <input
              id="name"
              type="text"
              value={name_ar}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderName")}
              onChange={onChangeName_ar}
            />
            </Col>
          </Row>
          <Row>
            <Col>
            <label className="form-label" for="job">
            {t("Admin:Employee.Add.job-en")}
            </label>
            <input
              id="job"
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderjob")}
              value={job_en}
              onChange={onChangejob_en}

            />
            </Col>
            <Col>
            <label className="form-label" for="job">
            {t("Admin:Employee.Add.job-ar")}
            </label>
            <input
              id="job"
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderjob")}
              value={job_ar}
              onChange={onChangejob_ar}

            />
            </Col>
          </Row>
         
          
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 "> {t("Admin:Employee.update.update")}</button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditEmployee;
