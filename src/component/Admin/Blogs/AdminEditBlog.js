import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdateBlog } from "../../../Hooks/Blogs-Hooks/UseUpdateBlog";
import { useTranslation } from "react-i18next";

const AdminEditBlog = () => {
    const { t } = useTranslation();
  
  const { id } = useParams();

  const {
    img,
    Addressar,
    Addressen,
    descriptionar,
    descriptionen,
    publisher,
    publisdDates,
    onchangelocar,
    onchangelocen,
    onchagedesar,
    onchagedesen,
    onchangepublisher,
    onchangepubishdate,
    onImageChange,
    handelupdate,
  } = UseUpdateBlog(id);


  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">{t("Admin:blog.update.head")} </div>
        <Col sm="8">
          <div className="text-form pb-2"> {t("Admin:blog.Add.photo")}</div>
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
            <label className="form-label" for="Publisher">
            {t("Admin:blog.Add.Publisher")}
            </label>
            <input
              value={publisher}
              id="Publisher"
              type="text"
              onChange={onchangepublisher}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:blog.Add.placeHolderPub")}
            />
            <label className="form-label" for="publish-date">
            {t("Admin:blog.Add.PublishDate")}
            </label>
            <input
              value={publisdDates}
              id="publish-date"
              type="text"
              onChange={onchangepubishdate}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:blog.Add.placeHolderateD")}
            />
            <Row>
              <Col sm="6">
                <label className="form-label" for="lcoation-ar">
                {t("Admin:blog.Add.location-ar")}
                </label>
                <input
                  value={Addressar}
                  id="lcoation-ar"
                  type="text"
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:blog.Add.placeHolderloc-ar")}
                  onChange={onchangelocar}
                />
              </Col>
              <Col sm="6">
                <label className="form-label" for="location-ar">
                {t("Admin:blog.Add.location-en")}
                </label>
                <input
                  value={Addressen}
                  id="location-ar"
                  type="text"
                  className="input-form d-block mt-3 px-3"
                  placeholder={t("Admin:blog.Add.placeHolderloc-en")}
                  onChange={onchangelocen}
                />
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <label className="form-label" for="description">
                {t("Admin:blog.Add.Description-ar")}
                </label>
                <textarea
                  value={descriptionar}
                  id="description"
                  className="input-form-textarea d-block mt-3 px-3"
                  placeholder={t("Admin:blog.Add.placeHolderdes-ar")}
                  rows="5"
                  cols="33"
                  onChange={onchagedesar}
                />
              </Col>
              <Col sm="6">
                <label className="form-label" for="description">
                {t("Admin:blog.Add.Description-en")}
                </label>
                <textarea
                  value={descriptionen}
                  id="description"
                  className="input-form-textarea d-block mt-3 px-3"
                  placeholder={t("Admin:blog.Add.placeHolderdes-en")}
                  rows="5"
                  cols="33"
                  onChange={onchagedesen}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
          {t("Admin:blog.update.update")}
          </button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditBlog;
