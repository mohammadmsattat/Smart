import React from 'react';
import { UseLogIn } from '../../Hooks/LogInHook';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';


function LogInPage() {
  
  const [SetEmail,SetPassword,HandleLogIn]=UseLogIn()

  return (
    <div >

      <div className='login-page d-flex justify-content-center  align-items-center ' >
        <Col col='12' >

          <Card className='login-card text-black my-5 mx-auto' >
            <CardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

              <label className='mt-5' for='email'>Email Address</label>
              <input  onChange={(e)=>SetEmail(e.target.value)} label='Email address'  id='email' size="lg "  />
              
              <label className='mt-5'>Password</label>
              <input  onChange={(e)=>SetPassword(e.target.value)} label='Password' type='password' size="lg" />

              <button 
               className='mt-5 mx-2 px-5' 
               size='lg' 
               onClick={HandleLogIn}>
                Login
              </button>

              
            </CardBody>
          </Card>

        </Col>
      </div>

    </div>
  );
}

export default LogInPage;