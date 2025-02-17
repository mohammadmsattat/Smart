import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../BaseUrl";

export const ContactEmail = createAsyncThunk(
  "contactus/postemail",
  async (formData) => {
    console.log(formData);
    
    try {
      const response = await BaseUrl.post("/api/v1/contactUs", formData);

      return response;
    } catch (error) {
      console.log(error);
      
      return error.response;
    }
  }
);
