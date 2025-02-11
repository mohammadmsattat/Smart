import React from "react";
import { Col, Row } from "react-bootstrap";
import { UseUpdateProject } from "../../../Hooks/project-Hooks/UseUpdateProject";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const AdminEditProject = () => {
  //get project data
  const { id } = useParams();
  const {
    img,
    name,
    onChangeName,
    onChangeImage,
    description,
    onChangeDecription,
    handelupdate,
  } = UseUpdateProject(id);

  return (
    <div>
      <Row>
        <div className="admin-content-text pb-4">Edit Project </div>
        <Col sm="8">
          <div className="text-form pb-2"> Enter photo</div>
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
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onChangeName}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter name..."
            />
            <label className="form-label" for="job">
              Description
            </label>
            <textarea
              id="job"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder=" Enter description..."
              rows="5"
              cols="33"
              value={description}
              onChange={onChangeDecription}
            />

            <div className="check-comming-soon">
              <input id="comming-soon" type="checkbox" />
              <label for="comming-soon">Comming soon</label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 ">
            {" "}
            Update
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditProject;
