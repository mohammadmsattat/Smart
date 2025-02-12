import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { UseUpdateOffice } from "../../../Hooks/office-Hooks/UseUpdateOffice";

const AdminEditOffice = () => {
  const { id } = useParams();
const {
  img,
  location,
  onChangeLocation,
  onChangeImage,
  Address,
  onChangeAddress,
  handelupdate,
}=UseUpdateOffice(id);
  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">Edit Office Details </div>
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
              Address
            </label>
            <input
              id="name"
              type="text"
              value={location}
              onChange={onChangeLocation}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter name..."
            />
            <label className="form-label" for="job">
              Address detailes
            </label>
            <textarea
              id="job"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder=" Enter description..."
              rows="5"
              cols="33"
              value={Address}
              onChange={onChangeAddress}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-start add-btn">
          <button onClick={handelupdate} className="btn-save d-inline mt-2 "> Update</button>
        </Col>
      </Row>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminEditOffice;
