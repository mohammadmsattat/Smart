import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminAddProject from '../../component/Admin/AdminAddProject'

const AdminAddProjectPage = () => {
    return (
        <div className='admin-page '  >
            <Row className='py-3 container '>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAddProject />
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProjectPage
