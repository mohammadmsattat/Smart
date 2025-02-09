import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import  { Toaster } from 'react-hot-toast';
import { UsePostOffice } from '../../Hooks/OfficeHook';


const AdminAddOffice = () => {

    const  [img,setlocation,setSelectedFile,setImg,setDescription,onImageChange,handelPost,response, Loading]=UsePostOffice()
    

   

    return (
        <div>
            <Row className=" ">
                <div className="admin-content-text pb-4">Add new Office </div>
                <Col sm="8">
                    <div className="text-form pb-2"> Enter photo</div>
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

                        <label className="form-label" for="name">Address</label>
                        <input
                            id="name"
                            type="text"
                            onChange={(e)=>setlocation(e.target.value)}
                            className="input-form d-block mt-3 px-3"
                            placeholder=" Enter name..."
                        />
                        <label className="form-label" for="job">Address detailes</label>
                        <textarea id="job"  
                                className='input-form-textarea d-block mt-3 px-3' 
                                 placeholder=" Enter description..." 
                                 rows="5" 
                                 cols="33"
                                  onChange={(e)=>setDescription(e.target.value)}  
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

export default AdminAddOffice
