import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminManegmentEmployee from '../../component/Admin/AdminManegmentEmployee'

const AdminmanegmentEmployeePage = () => {
    return (
        <div className='admin-page '  >
            <Row className='py-3 container'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminManegmentEmployee />
                </Col>
            </Row>
        </div>
    )
}

export default AdminmanegmentEmployeePage
