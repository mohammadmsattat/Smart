import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminSideBar from "../../../component/Admin/AdminSideBar";
import AdminAddBlog from "../../../component/Admin/Blogs/AdminAddBlog";

const AdminAddBlogPage = () => {
  return (
    <div className="admin-page ">
      <Row className="py-3  container">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddBlog />
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddBlogPage;
