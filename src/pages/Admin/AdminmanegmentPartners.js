import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminManegmentPartners from '../../component/Admin/AdminManegmentPartner'

const AdminManegmentPartnersPage = () => {
    return (
        <div className='admin-page '  >
            <Row className='py-3 container'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminManegmentPartners />
                </Col>
            </Row>
        </div>
    )
}

export default AdminManegmentPartnersPage
