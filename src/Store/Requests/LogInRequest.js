import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//post login
export const LogInRequest = createAsyncThunk(
    "login/postLogin",
    async (formData) => {
        try {
      
            const response = await BaseUrl.post("/api/v1/auth/login",formData);  
                                  
            return response; 
        } catch (error) {

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);