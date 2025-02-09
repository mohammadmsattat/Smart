import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//get all office request
export const GetAllOffices = createAsyncThunk(
    "office/getAlloffices",
    async () => {
        try {
      
            const response = await BaseUrl.get("/api/v1/location");  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


//post office request
export const PostOffice = createAsyncThunk(
    "office/postoffice",
    async (formData) => {
        try {          
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.post("/api/v1/location",formData,config);  
            console.log(response);
            
                                  
            return response; 
        } catch (error) {
            return error.response; 
            
        }
    }
);

//Delete office  request
export const DeleteOffice = createAsyncThunk(
    "office/deleteoffice",
    async (id) => {
        try {   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.delete(`/api/v1/location/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


////////get one  office request
export const GetOneOffice = createAsyncThunk(
    "office/getoneoffice",
    async (id) => {
        try {   
                   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.get(`/api/v1/location/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


//update  office request

export const UpdateOneOffice = createAsyncThunk(
    "office/updateoffice",
    async (id,formdata) => {
        try {   
            console.log(id);
                   
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.put(`/api/v1/location/${id}`,formdata,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);