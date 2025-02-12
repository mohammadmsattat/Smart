import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../BaseUrl";

export const GetOurInformation = createAsyncThunk(
  "information/getinformations",
  async () => {
    try {
      const response = await BaseUrl.get("/api/v1/contact");

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

//update information
export const UpdateInformations = createAsyncThunk(
  "information/updateinformations",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: ` Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.put(
        `/api/v1/contact/${id}`,
        formData,
        config
      );

      return response;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({
          message: "An error occurred while updating the project.",
        });
      }
    }
  }
);
