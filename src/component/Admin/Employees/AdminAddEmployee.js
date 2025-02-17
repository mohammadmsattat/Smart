import React from "react";
import { Col, Row } from "react-bootstrap";
import { UsePostEmployee } from "../../../Hooks/Employees-Hooks/UsePostEmpoyee";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AdminAddEmployee = () => {
  const { t } = useTranslation();

  const {
    img,
    setName,
    setJob,
    onImageChange,
    handelPost,
   } = UsePostEmployee();

  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">{t("Admin:Employee.Add.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2">{t("Admin:Employee.Add.photo")}</div>
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
            {t("Admin:Employee.Add.name")}
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderName")}
            />
            <label className="form-label" for="job">
            {t("Admin:Employee.Add.job")}
            </label>
            <input
              id="job"
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:Employee.Add.placeHolderjob")}
              onChange={(e) => setJob(e.target.value)}
            />
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
