import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../BaseUrl'



//get all projects request
export const GetAllProjects = createAsyncThunk(
    "Projects/getAllProjects",
    async () => {
        try {
      
            const response = await BaseUrl.get("/api/v1/project");  
                                  
            return response; 
        } catch (error) {
            return error.response; 
            
        }
    }
);


//post project request
export const PostProject = createAsyncThunk(
    "postProjects/postproject",
    async (formData) => {
        try {          
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.post("/api/v1/project",formData,config);  
                                  
            return response; 
        } catch (error) {

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);


//Delete project request
export const DeleteProject = createAsyncThunk(
    "project/deleteproject",
    async (id) => {
        try {   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.delete(`/api/v1/project/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


///////////////get one  project request
export const GetOneProject = createAsyncThunk(
    "project/getoneproject",
    async (id) => {
        try {   
                   
            const config = {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.get(`/api/v1/project/${id}`,config);  
                                  
            return response; 
        } catch (error) {

            return error.response; 
            
        }
    }
);


////////////////update  project request//////

export const UpdateOneProject = createAsyncThunk(
    "project/updateproject",
    async (id,formdata) => {
        try {   
            console.log(id);
                   
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
      
            const response = await BaseUrl.put(`/api/v1/project/${id}`,formdata,config);  
                            console.log(response);
                                  
            return response; 
        } catch (error) {
            console.log(error);

            console.log(error.response.data);
            return error.response; 
            
        }
    }
);