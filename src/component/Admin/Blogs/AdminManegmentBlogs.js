import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Model from "../Model";
import {UseGetAllBlogs} from '../../../Hooks/Blogs-Hooks/UseGetAllBlogs'
import {UseDeleteBlog} from '../../../Hooks/Blogs-Hooks/UseDeleteBlog'

const AdminManegmentBlogs = () => {
  const {blogs} = UseGetAllBlogs();
  console.log(blogs);
  

  const {SubmitDelete, show, handleClose, handleShow}= UseDeleteBlog();
  const [Delid, setDelId] = useState("");

  const deleteModel = (id) => {
    setDelId(id);
    handleShow();
  };

  return (
    <div>
      <Model
        show={show}
        handleClose={handleClose}
        SubmitDelete={SubmitDelete}
        Delid={Delid}
      />
      <h3>Manegment Blogs</h3>
      <Link to="/admin/add-blog" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">Add Blog</button>
        </div>
      </Link>
      <div className="row">
        { blogs.data? blogs.data.map((item, index) => {
          return (
            <Card key={index} style={{ width: "18rem", margin: ".4em" }}>
              <Card.Img variant="top" src={item.imageCover} />
              <Card.Body>
                <Card.Title>{item.publisher}</Card.Title>
                <Card.Text>{item.job}</Card.Text>
                <div className="manage-btn">
                  <Button
                    onClick={() => deleteModel(item._id)}
                    variant="primary"
                  >
                    Delete
                  </Button>

                  <Button variant="primary">
                    <Link
                      to={`/admin/edit-blog/${item._id}`}
                      style={{ color: "white" }}
                    >
                      Update
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        }):null}
      </div>
    </div>
  );
};

export default AdminManegmentBlogs;
