import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminSideBar from "../../../component/Admin/AdminSideBar";
import AdminEditProject from "../../../component/Admin/Project/AdminEditProject";

const AdminEditProjectPage = () => {
  return (
    <div className="admin-page ">
      <Row className="py-3 container ">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminEditProject />
        </Col>
      </Row>
    </div>
  );
};

export default AdminEditProjectPage;
