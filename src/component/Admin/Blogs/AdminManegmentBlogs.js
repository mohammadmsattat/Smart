import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Model from "../Model";
import { UseGetAllBlogs } from "../../../Hooks/Blogs-Hooks/UseGetAllBlogs";
import { UseDeleteBlog } from "../../../Hooks/Blogs-Hooks/UseDeleteBlog";
import { useTranslation } from "react-i18next";

const AdminManegmentBlogs = () => {
    const { t } = useTranslation();
  
  const { blogs } = UseGetAllBlogs();

  const { SubmitDelete, show, handleClose, handleShow } = UseDeleteBlog();
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
      <h3>{t("Admin:blog.manegment.head")}</h3>
      <Link to="/admin/add-blog" style={{ textDecoration: "none" }}>
        <div>
          <button className="add-btn-2">{t("Admin:blog.manegment.Add")}</button>
        </div>
      </Link>
      <div className="row">
        {blogs.data
          ? blogs.data.map((item, index) => {
              return (
                <Card key={index} className="admin-card">
                  <Card.Img variant="top" src={item.imageCover} />
                  <Card.Body>
                    <Card.Title className="card-head">
                      <Link to={`/Blog-details/${item._id}`}>
                        {item.publisher}
                      </Link>
                    </Card.Title>
                    <div className="manage-btn">
                      <Button
                        onClick={() => deleteModel(item._id)}
                        variant="primary"
                      >
                        {t("Admin:blog.manegment.Delete")}
                      </Button>

                      <Button variant="primary">
                        <Link
                          to={`/admin/edit-blog/${item._id}`}
                          style={{ color: "white" }}
                        >
                          {t("Admin:blog.manegment.update")}
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AdminManegmentBlogs;
