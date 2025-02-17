import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdateService } from "../../../Hooks/service-Hooks/UseUpdateService";
import { useTranslation } from "react-i18next";

const AdminEditService = () => {
    const { t } = useTranslation();
  
  const { id } = useParams();
  const {
    img,
    name,
    commingSoon,
    onchecked,
    onChangeName,
    onChangeImage,
    description,
    onChangeDecription,
    handelupdate,
  } = UseUpdateService(id);

  
  return (
    <div className="Add-page">
      <Row>
        <div className="admin-content-text pb-4">{t("Admin:service.update.head")} </div>
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
              onChange={onChangeImage}
            />
          </div>
          <div className="form-input-text">
            <label className="form-label" for="name">
            {t("Admin:service.Add.name")}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onChangeName}
              className="input-form d-block mt-3 px-3"
              placeholder={t("Admin:service.Add.placeHolderName")}
            />
            <label className="form-label" for="description">
            {t("Admin:service.Add.Description")}
            </label>
            <textarea
              id="description"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder={t("Admin:service.Add.placeHolderdes")}
              rows="5"
              cols="33"
              value={description}
              onChange={onChangeDecription}
            />

            <div className="check-comming-soon">
            {
              commingSoon? <input onClick={onchecked} id="comming-soon" type="checkbox" checked/>:
                          <input onClick={onchecked}  id="comming-soon" type="checkbox" />
            }              
            <label for="comming-soon">{t("Admin:service.Add.commingSoon")}</label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
          {t("Admin:service.update.update")}
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditService;
