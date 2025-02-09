import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//get all service request
export const GetAllServices = createAsyncThunk(
    "Service/getAllService",
    async () => {
        try {
      
            const response = await BaseUrl.get("/api/v1/service");  
                                  
            return response; 
        } catch (error) {
            return error.response; 
            
        }
    }
);


//post service request
export const PostService = createAsyncThunk(
    "service/postservice",
    async (formData) => {
        try {          
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.post("/api/v1/service",formData,config);  
                                  
            return response; 
        } catch (error) {

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);

//Delete service request
export const DeleteOneService = createAsyncThunk(
    "services/deleteservice",
    async (id) => {
        try {   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.delete(`/api/v1/service/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


///////////////get one  service request
export const GetOneService = createAsyncThunk(
    "services/getoneservice",
    async (id) => {
        try {   
                   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.get(`/api/v1/service/${id}`,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);


////////////////update  service request//////

export const UpdateOneService = createAsyncThunk(
    "services/updateservice",
    async (id,formdata) => {
        try {   
            console.log(id);
                   
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.put(`/api/v1/service/${id}`,formdata,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);