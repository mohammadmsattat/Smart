import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { UseGetOnePartner } from '../../Hooks/PartenrHook';


const AdminEditPartner = () => {

    const {id}=useParams();
    const[partner]=UseGetOnePartner(id);
    


    return (
        <div>
            <Row className=" ">
                <div className="admin-content-text pb-4">Edit Partner Data</div>
                <Col sm="8">
                    <div className="text-form pb-2"> partner logo</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={partner.logo}
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

                        />
                    </div>

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-start add-btn">
                    <button   className="btn-save d-inline mt-2 "> Add</button>
                </Col>
            </Row>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />

        </div>
    )
}

export default AdminEditPartner
