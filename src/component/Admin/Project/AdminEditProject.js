import React from "react";
import { Col, Row } from "react-bootstrap";
import { UseUpdateProject } from "../../../Hooks/project-Hooks/UseUpdateProject";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminEditProject = () => {
  const { t } = useTranslation();

  //get project data
  const { id } = useParams();
  const {
    img,
    name_en,
    name_ar,
    commingSoon,
    category_en,
    category_ar,
    onChangeName_en,
    onChangeName_ar,
    onChangeImage,
    onCategoryChange_en,
    onCategoryChange_ar,
    onchecked,
    setImg,
    description_en,
    description_ar,
    onChangeDecription_en,
    onChangeDecription_ar,
    onImageChange,
    handelupdate,
    response,
    Loading,
  } = UseUpdateProject(id);

  return (
    <div className="Add-page">
      <Row>
        <div className="admin-content-text info-head-ar pb-4">
          {t("Admin:project.update.head")}{" "}
        </div>
        <Col sm="8">
          <div className="text-form pb-2 info-head-ar"> {t("Admin:project.Add.photo")}</div>
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
                  {t("Admin:project.Add.name-en")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name_en}
                  onChange={onChangeName_en}
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:project.Add.placeHolderName")}
                />
              </Col>
              <Col>
                <label className="form-label" for="name">
                  {t("Admin:project.Add.name-ar")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name_ar}
                  onChange={onChangeName_ar}
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:project.Add.placeHolderName")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="form-label" for="category">
                  {t("Admin:project.Add.category-en")}
                </label>
                <input
                  id="category"
                  value={category_en}
                  type="text"
                  onChange={onCategoryChange_en}
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:project.Add.placeHolderCat")}
                />
              </Col>
              <Col>
                <label className="form-label" for="category">
                  {t("Admin:project.Add.category-ar")}
                </label>
                <input
                  id="category"
                  value={category_ar}
                  type="text"
                  onChange={onCategoryChange_ar}
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:project.Add.placeHolderCat")}
                />
              </Col>
            </Row>

            <label className="form-label" for="job">
              {t("Admin:project.Add.Description-en")}
            </label>
            <textarea
              id="job"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:project.Add.placeHolderdes")}
              rows="5"
              cols="33"
              value={description_en}
              onChange={onChangeDecription_en}
            />
            <label className="form-label" for="job">
              {t("Admin:project.Add.Description-ar")}
            </label>
            <textarea
              id="job"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:project.Add.placeHolderdes")}
              rows="5"
              cols="33"
              value={description_ar}
              onChange={onChangeDecription_ar}
            />
            <div className="check-comming-soon">
              {commingSoon ? (
                <input
                  onClick={onchecked}
                  id="comming-soon"
                  type="checkbox"
                  checked
                />
              ) : (
                <input onClick={onchecked} id="comming-soon" type="checkbox" />
              )}

              <label for="comming-soon">
                {t("Admin:project.Add.commingSoon")}
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
            {" "}
            {t("Admin:project.update.update")}
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditProject;
