import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminManegmentProjects from '../../component/Admin/AdminManegmentProjects'

const AdminManegmentProjectPage = () => {
    return (
        <div className='admin-page '  >
            <Row className='py-3 container'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminManegmentProjects />
                </Col>
            </Row>
        </div>
    )
}

export default AdminManegmentProjectPage
