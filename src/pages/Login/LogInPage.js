import React, { useState } from 'react';
import { UseLogIn } from '../../Hooks/LogInHook';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';


function LogInPage() {
  
  const [SetEmail,SetPassword,HandleLogIn]=UseLogIn()

  return (
    <Container >

      <Row className='d-flex justify-content-center mt-5 align-items-center h-100'>
        <Col col='12'>

          <Card className='login-card text-black my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px',backgroundColor:'#DBDEFF'}}>
            <CardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

              <label className='mt-5' for='email'>Email Address</label>
              <input  onChange={(e)=>SetEmail(e.target.value)} label='Email address'  id='email' size="lg "  style={{ backgroundColor: 'white' }}/>
              
              <label className='mt-5'>Password</label>
              <input  onChange={(e)=>SetPassword(e.target.value)} label='Password' type='password' size="lg" style={{ backgroundColor: 'white' }}/>

              <button 
               className='mt-5 mx-2 px-5' 
               size='lg' 
               onClick={HandleLogIn}
               style={{
                backgroundColor: '#6865FF',
	               padding: '1em',
	               borderRadius: '.7em',
                 transform: 'none',
                 color:'white'
               }}>
                Login
              </button>

              
            </CardBody>
          </Card>

        </Col>
      </Row>

    </Container>
  );
}

export default LogInPage;