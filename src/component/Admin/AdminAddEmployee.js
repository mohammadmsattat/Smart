import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { UsePostEmployee } from '../../Hooks/TeamHooks'
import { Toaster } from 'react-hot-toast';


const AdminAddEmployee = () => {

    const [img,setName,setSelectedFile,setImg,setJob,onImageChange,handelPost,response, GetLoading]=UsePostEmployee();
   

    return (
        <div>
            <Row className=" ">
                <div className="admin-content-text pb-4">Add new Employee </div>
                <Col sm="8">
                    <div className="text-form pb-2"> Employee photo</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            style={{display:'none'}}
                            type="file"
                            name="photo"
                            id="upload-photo"
                            onChange={onImageChange}

                        />
                    </div>
                    <div className="form-input-text">

                        <label className="form-label" for="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={(e)=>setName(e.target.value)}
                            className="input-form d-block mt-3 px-3"
                            placeholder=" Enter name..."
                        />
                        <label className="form-label" for="job">Job</label>
                        <input
                            id="job"
                            type="text"
                            className="input-form d-block mt-3 px-3"
                            placeholder=" Enter job..."
                            onChange={(e)=>setJob(e.target.value)}  

                        />
                   </div>

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-start add-btn">
                    <button onClick={handelPost} className="btn-save d-inline mt-2 "> Add</button>
                </Col>
            </Row>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />

        </div>
    )
}

export default AdminAddEmployee
