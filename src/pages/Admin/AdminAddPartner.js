import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../component/Admin/AdminSideBar'
import AdminAddPartner from '../../component/Admin/AdminAddPartner'

const AdminAddPartnerPage = () => {
    return (
        <div className='admin-page '  >
            <Row className='py-3 container'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAddPartner />
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddPartnerPage
