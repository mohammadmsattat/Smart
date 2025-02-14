import { createSlice } from "@reduxjs/toolkit";
import { GetAllBlogs,GetOneBlog ,DeleteBlog,PostBlog,UpdateBlog} from "../Requests/BlogsRequests";

const InitialVlues = {
  blogs: [],
  post:[],
  getOne: [],
  delete: [],
  update:[],

 

  GetAllLoading: false,
  PostLoading: false,
  GetOneLoading: false,
  DeleteLoading: false,
  UpdateLoading: false,

  error: null,
};

const BlogsSlice = createSlice({
  name: "Blogs",
  initialState: InitialVlues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllBlogs.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.GetAllLoading = false;
      })
      .addCase(GetAllBlogs.rejected, (state) => {
        state.GetAllLoading = false;
      });

    builder
      .addCase(GetOneBlog.pending, (state) => {
        state.GetOneLoading = true;
      })
      .addCase(GetOneBlog.fulfilled, (state, action) => {
        state.getOne = action.payload;
        state.GetOneLoading = false;
      })
      .addCase(GetOneBlog.rejected, (state) => {
        state.GetOneLoading = false;
      });

    builder
      .addCase(DeleteBlog.pending, (state) => {
        state.DeleteLoading = true;
      })
      .addCase(DeleteBlog.fulfilled, (state, action) => {
        state.delete = action.payload;
        state.DeleteLoading = false;
      })
      .addCase(DeleteBlog.rejected, (state) => {
        state.DeleteLoading = false;
      });

    builder
      .addCase(PostBlog.pending, (state) => {
        state.PostLoading = true;
      })
      .addCase(PostBlog.fulfilled, (state, action) => {
        state.post = action.payload;
        state.PostLoading = false;
      })
      .addCase(PostBlog.rejected, (state) => {
        state.PostLoading = false;
      });

    builder
      .addCase(UpdateBlog.pending, (state) => {
        state.UpdateLoading = true;
      })
      .addCase(UpdateBlog.fulfilled, (state, action) => {
        state.update = action.payload;
        state.UpdateLoading = false;
      })
      .addCase(UpdateBlog.rejected, (state) => {
        state.UpdateLoading = false;
      });
  },
});

export default BlogsSlice.reducer;
