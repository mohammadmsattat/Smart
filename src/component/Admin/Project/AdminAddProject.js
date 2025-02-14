import React from "react";
import { Col, Row } from "react-bootstrap";
import { UsePostProject } from "../../../Hooks/project-Hooks/UsePostProject";
import { Toaster } from "react-hot-toast";

const AdminAddProject = () => {
  const { img, setName, setDescription,  setcategory, onchecked, onImageChange, handelPost } =
    UsePostProject();

  return (
    <div className="Add-page">
      <Row>
        <div className="admin-content-text pb-4">Add new Project </div>
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
              onChange={onImageChange}
            />
          </div>
          <div className="form-input-text">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter name..."
            />
             <label className="form-label" for="category">
              category
            </label>
            <input
              id="category"
              type="text"
              onChange={(e) => setcategory(e.target.value)}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter category..."
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
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="check-comming-soon">
              <input onClick={onchecked} id="comming-soon" type="checkbox" />
              <label  className="form-label" for="comming-soon">Comming soon</label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelPost} className="btn-save d-inline mt-2 ">
            Add
          </button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminAddProject;
