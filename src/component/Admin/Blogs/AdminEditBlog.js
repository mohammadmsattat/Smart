import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const AdminEditBlog = () => {
  const { id } = useParams();

  return (
    <div>
      <Row className=" ">
        <div className="admin-content-text pb-4">Edit Employee Data </div>
        <Col sm="8">
          <div className="text-form pb-2"> Employee photo</div>
          <div>
            <label for="upload-photo">
              <img
                // src={img}
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
            //   onChange={onChangeImage}
            />
          </div>
          <div className="form-input-text">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              id="name"
              type="text"
            //   value={name}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter name..."
            //   onChange={onChangeName}
            />
            <label className="form-label" for="job">
              Job
            </label>
            <input
              id="job"
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter job..."
            //   value={job}
            //   onChange={onChangejob}

            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button  className="btn-save d-inline mt-2 "> Update</button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditBlog;
