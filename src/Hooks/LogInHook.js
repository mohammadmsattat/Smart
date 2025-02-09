import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { LogInRequest } from '../Store/Requests/LogInRequest';


//login Hook
 export const UseLogIn = () => {

    const dispatch = useDispatch();

    const [email,SetEmail]=useState('') //email state
    const [password,SetPassword]=useState('') //password state

    //get data from store
    const response = useSelector(state => state.LogInSlice.login)
    const Loading = useSelector(state => state.LogInSlice.loading)
    
  
    //submit login button
    const HandleLogIn=async()=>{
        //validation 
      if(email===''){
        console.log('enter');
        return;   
      }
      if(password===''){
        console.log('enter');
        return;
      }
      
       await dispatch(LogInRequest({
        email: email,
        password : password 
    }));
  
    }
    
    //process response of login 
    useEffect(() => {
        if (Loading === false) {
            if (response.data) {
                console.log(response.data.token)
                if (response) {
                    sessionStorage.setItem("token", response.data.token)
                    setTimeout(() => {
                        window.location.href = `${process.env.PUBLIC_URL} `
                    }, 1500);
                } 
                if (response === "Incorrect email or password") {

                }
            }
        }
    }, [Loading])
  

   

    return [SetEmail,SetPassword,HandleLogIn]
};


