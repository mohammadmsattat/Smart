import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { UsePostPartners } from '../../Hooks/PartenrHook'
import { Toaster } from 'react-hot-toast';


const AdminAddPartner = () => {

   const [img,setSelectedFile,setImg,onImageChange,handelPost,response, Loading]=UsePostPartners();

    return (
        <div>
            <Row className=" ">
                <div className="admin-content-text pb-4">Add new partner </div>
                <Col sm="8">
                    <div className="text-form pb-2"> partner logo</div>
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

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-start add-btn">
                    <button  onClick={handelPost} className="btn-save d-inline mt-2 "> Add</button>
                </Col>
            </Row>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />

        </div>
    )
}

export default AdminAddPartner
