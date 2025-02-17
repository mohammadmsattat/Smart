import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminSideBar from "../../../component/Admin/AdminSideBar";
import AdminManegmentService from "../../../component/Admin/service/AdminManegmentService";

const AdminManegmentServicePage = () => {
  return (
    <div className="admin-page admin-page-rtl">
      <Row className="py-3 container">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminManegmentService />
        </Col>
      </Row>
    </div>
  );
};

export default AdminManegmentServicePage;
