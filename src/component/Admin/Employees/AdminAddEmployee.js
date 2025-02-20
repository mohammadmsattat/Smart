import React from "react";
import { Col, Row } from "react-bootstrap";
import { UsePostEmployee } from "../../../Hooks/Employees-Hooks/UsePostEmpoyee";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AdminAddEmployee = () => {
  const { t } = useTranslation();

  const {
    img,
    setName_en,
    setName_ar,
    setSelectedFile,
    setImg,
    setjob_en,
    setjob_ar,
    onImageChange,
    handelPost,
    response,
    postLoading,
   } = UsePostEmployee();

  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text info-head-ar pb-4">{t("Admin:Employee.Add.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2 info-head-ar">{t("Admin:Employee.Add.photo")}</div>
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
          <Row>
            <Col>
            <label className="form-label" for="name">
            {t("Admin:Employee.Add.name-en")}
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName_en(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderName")}
            />
            </Col>
            <Col>
            <label className="form-label" for="name">
            {t("Admin:Employee.Add.name-ar")}
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName_ar(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderName")}
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
              onChange={(e) => setjob_en(e.target.value)}
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
              onChange={(e) => setjob_ar(e.target.value)}
            />
            </Col>
          </Row>
           
           
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelPost} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:Employee.Add.Add")}
          </button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminAddEmployee;
