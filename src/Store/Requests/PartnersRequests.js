import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//get all partner request
export const GetAllPartners = createAsyncThunk(
    "partner/getAllpartner",
    async () => {
        try {
      
            const response = await BaseUrl.get("/api/v1/partner");  
                                  
            return response; 
        } catch (error) {
            return error.response; 
            
        }
    }
);


//post parner request
export const PostPartner = createAsyncThunk(
    "partner/postpartner",
    async (formData) => {
        try {          
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.post("/api/v1/partner",formData,config);  
                                  
            return response; 
        } catch (error) {
            return error.response; 
            
        }
    }
);


//Delete partner request
export const DeletePartner = createAsyncThunk(
    "partner/deletepartner",
    async (id) => {
        try {   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.delete(`/api/v1/partner/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


//get one  partner request
export const GetOnePartner = createAsyncThunk(
    "partner/getonepartner",
    async (id) => {
        try {   
                   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.get(`/api/v1/partner/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


//update  project request

export const UpdatePartner = createAsyncThunk(
    "partner/updatpartner",
    async (id,formdata) => {
        try {   
            console.log(id);
                   
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.put(`/api/v1/partner/${id}`,formdata,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);