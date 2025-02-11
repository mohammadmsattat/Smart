import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../BaseUrl";

//get all Team request
export const GetAllTeam = createAsyncThunk("team/getAllteam", async () => {
  try {
    const response = await BaseUrl.get("/api/v1/team");

    return response;
  } catch (error) {
    return error.response;
  }
});

//post employee request
export const PostEmployee = createAsyncThunk(
  "team/postemployee",
  async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.post("/api/v1/team", formData, config);

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
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.delete(`/api/v1/team/${id}`, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

///get one  project request
export const GetOneEmployee = createAsyncThunk(
  "team/getoneemployee",
  async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.get(`/api/v1/team/${id}`, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }
);

//update request
export const UpdateEmployee = createAsyncThunk(
  "team/updateemployee",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: ` Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.put(
        `/api/v1/team/${id}`,
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
