import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
            <Link to="/admin/manegment-service" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Edit  Service
                    </div>
                </Link>
                <Link to="/admin/manegment-project" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Edit project
                    </div>
                </Link>
                <Link to="/admin/manegment-employee" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Edit Employee
                    </div>
                </Link>
                <Link to="/admin/manegment-partner" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Edit Partners
                    </div>
                </Link>
                <Link to="/admin/manegment-office" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Edit Offices
                    </div>
                </Link>
                <Link to="" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Blog
                    </div>
                </Link>
                
              

            </div>
        </div>
    )
}

export default AdminSideBar
