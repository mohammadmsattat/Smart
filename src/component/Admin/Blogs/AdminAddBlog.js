import React from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { UsePostBlog } from "../../../Hooks/Blogs-Hooks/UsePostBlog";
const AdminAddBlog = () => {

  const {
    img,
    onchangelocar,
    onchangelocen,
    onchagedesar,
    onchagedesen,
    onchangepublisher,
    onchangepubishdate,
    setSelectedFile,
    setImg,
    onImageChange,
    handelPost,
    response,
    postLoading,
}=UsePostBlog();
  return (
    <div className="Add-page">
      <Row className=" ">
        <div className="admin-content-text pb-4">Add new Blog </div>
        <Col sm="8">
          <div className="text-form pb-2"> Blog photo</div>
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
              Publisher
            </label>
            <input
              id="Publisher"
              type="text"
              onChange={onchangepublisher}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter publisher..."
            />
             <label className="form-label" for="publish-date">
              Publish Date
            </label>
            <input
              id="publish-date"
              type="text"
              onChange={onchangepubishdate}
              className="input-form d-block mt-3 px-3"
              placeholder=" Enter publish date..."
            />
          <Row>
            <Col sm="6">
            <label className="form-label" for="lcoation-ar">
                location-arabic
              </label>
              <input
                id="lcoation-ar"
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" Enter location..."
                  onChange={onchangelocar}
              />
            </Col>
            <Col sm="6">
            <label className="form-label" for="location-ar">
                location-english
              </label>
              <input
                id="location-ar"
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" Enter location..."
                  onChange={onchangelocen}
              />
            </Col>
          
          </Row>

          <Row>
            <Col sm="6">
            <label className="form-label" for="description">
              Description-ar
            </label>
            <textarea
              id="description"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder=" Enter description..."
              rows="5"
              cols="33"
              onChange={onchagedesar}
              />
            </Col>
            <Col sm="6">
            <label className="form-label" for="description">
              Description-en
            </label>
            <textarea
              id="description"
              className="input-form-textarea d-block mt-3 px-3"
              placeholder=" Enter description..."
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
          <button onClick={handelPost} className="btn-save d-inline mt-2 ">Add</button>
        </Col>
      </Row>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AdminAddBlog;
