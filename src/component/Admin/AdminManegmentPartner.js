import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UseDeleteOnePartner, UseGetAllPartners } from '../../Hooks/PartenrHook'

const AdminManegmentPartners = () => {

    const [partner]=UseGetAllPartners();

    const [response,SubmitDelete,show,setshow,handleClose,handleShow]=UseDeleteOnePartner();
    const [Delid,setDelId]=useState('');

    const deleteModel=(id)=>{
        setDelId(id)
        handleShow()
    }

  return (
    <div>   
         
         <div   style={{position:'fixed', 
                            zIndex:'2',
                            backgroundColor:'rgb(212 212 212)' ,
                            borderRadius:'.8em',
                            width:'50%' ,
                            padding:'1.3em',
                            top:'50%',
                            right:'50%',

                            display:show
                                        }} >
                    <Modal.Dialog>
                        <Modal.Header  >
                        <Modal.Title>Delete Partner</Modal.Title>
                        </Modal.Header>
        
                        <Modal.Body>
                        <p>Are You Shure To Delete it</p>
                        </Modal.Body>
        
                        <Modal.Footer>
                        <Button onClick={()=>handleClose()} variant="secondary">Close</Button>
                        <Button onClick={()=>SubmitDelete(Delid)} variant="primary">Delete</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    </div>

                    <h3>Manegment Partners</h3>    


                    <Link to="/admin/addpartner" style={{ textDecoration: 'none' }}>
                    <div >
                        <button className='add-btn-2' >Add partner</button>
                    </div>
                    </Link>
                    

                
        <div className='row'>
        {
            partner.map((item,index)=>{
                     return   <Card key={index} style={{ width: '18rem', margin:'.4em' }}>
                                    <Card.Img variant="top" src={item.imageCover} />
                                    <Card.Body>
                                        
                                        <div className='manage-btn'>

                                        <Button onClick={()=>deleteModel(item._id)} variant="primary">Delete</Button>
                                        <Button variant="primary">Update</Button>
                                        </div>
                                    </Card.Body>
                                </Card>

                        })
         }
           
            </div>
    </div>
  )
}

export default AdminManegmentPartners