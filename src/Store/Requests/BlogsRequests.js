import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../BaseUrl";

//get all  blogs
export const GetAllBlogs = createAsyncThunk("blog/getAllblogs", async (url) => {
  try {
    const response = await BaseUrl.get(url);

    return response;
  } catch (error) {
    return error.response;
  }
});

//post  request
export const PostBlog = createAsyncThunk("blog/postblog", async (formData) => {
  console.log(formData);

  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const response = await BaseUrl.post("/api/v1/blogs", formData, config);

    return response;
  } catch (error) {
    return error.response;
  }
});

//Delete   request
export const DeleteBlog = createAsyncThunk("blog/deleteblog", async (id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const response = await BaseUrl.delete(`/api/v1/blogs/${id}`, config);

    return response;
  } catch (error) {
    return error.response;
  }
});

//get one  blog
export const GetOneBlog = createAsyncThunk("blog/getoneblog", async (id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const response = await BaseUrl.get(`/api/v1/blogs/${id}`, config);
    
    return response;
  } catch (error) {
    
    return error.response;
  }
});

// //update  request
export const UpdateBlog = createAsyncThunk(
  "blog/updateblog",
  async ({ id, formData }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      };

      const response = await BaseUrl.put(
        `/api/v1/blogs/${id}`,
        formData,
        config
      );

      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      
      return error.response;
    }
  }
);
