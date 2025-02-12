import React from 'react'
import {  Outlet } from 'react-router-dom'
import ErrorPage from '../../pages/404/ErrorPage' 

const ProtectedRoute = ({  children }) => {

    const token=sessionStorage.getItem('token')
    if (token) {
        return children ? children : <Outlet />
    }
    else {
        return <ErrorPage/>
    }

}

export default ProtectedRoute