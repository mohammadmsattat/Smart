import React, { useState } from 'react'
import { Button, Card,  Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { trimString } from '../../utils'
import { UseDeleteOneProject, UseGetAllProjects } from '../../Hooks/ProjectsHooks'

const AdminManegmentProjects = () => {

    const [projects]=UseGetAllProjects();

    const [response,SubmitDelete,show,setshow,handleClose,handleShow]=UseDeleteOneProject();
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
                        <Modal.Title>Delete Project</Modal.Title>
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


                    <h3>Manegment Projects</h3>    

                    <Link to="/admin/addproject" style={{ textDecoration: 'none' }}>
                    <div >
                        <button className='add-btn-2' >Add project</button>
                    </div>
                    </Link>
                    

                
        <div className='row'>
        {
            projects.map((item,index)=>{
                     return   <Card key={index} style={{ width: '18rem', margin:'.4em' }}>
                                    <Card.Img variant="top" src={item.imageCover} />
                                    <Card.Body>
                                        <Card.Title>
                                        <Link to={`/project/${item._id}`} style={{color:'black'}}>

                                        {item.name}
                                        </Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {
                                                trimString(item.description)
                                            }
                                        </Card.Text>
                                        <div className='manage-btn'>

                                        <Button onClick={()=> deleteModel(item._id)} variant="primary">Delete</Button>
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

export default AdminManegmentProjects