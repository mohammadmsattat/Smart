import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//get all Team request
export const GetAllTeam = createAsyncThunk(
    "team/getAllteam",
    async () => {
        try {
      
            const response = await BaseUrl.get("/api/v1/team");  
                            console.log('response');
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);

//post employee request
export const PostEmployee = createAsyncThunk(
    "team/postemployee",
    async (formData) => {
        try {          
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.post("/api/v1/team",formData,config); 
             
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


//Delete employee request
export const DeleteEmployee = createAsyncThunk(
    "team/deleteEmployee",
    async (id) => {
        try {   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.delete(`/api/v1/team/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


///////////////get one  project request
export const GetOneEmployee = createAsyncThunk(
    "team/getoneemployee",
    async (id) => {
        try {   
                   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.get(`/api/v1/team/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


////////////////update  project request//////

export const UpdateOneEmployee = createAsyncThunk(
    "team/updateemployee",
    async (id,formdata) => {
        try {   
            console.log(id);
                   
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.put(`/api/v1/team/${id}`,formdata,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);