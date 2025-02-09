import { createSlice } from '@reduxjs/toolkit';
import { GetAllProjects ,GetOneProject,DeleteProject,UpdateOneProject } from '../Requests/ProjectsRequests';
import { PostProject } from '../Requests/ProjectsRequests';

const InitialVlues={
    Projects: [],
    post:[],
    getoneproject:[],
    deleteproject:[],
    updateProject:[],

    GetAllLoading: false,
    PostLoading: false,
    GetOneLoading: false,
    DeleteLoading: false,
    UpdateLoading: false,

    error: null,
  }


// create Slice
const ProjectsSlice = createSlice({
  name: 'projects',
  initialState:InitialVlues ,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
    .addCase(GetAllProjects.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllProjects.fulfilled, (state, action) => {
        state.Projects = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetAllProjects.rejected, (state) => {
        state.GetAllLoading = false;
      });

      builder
    .addCase(PostProject.pending, (state) => {
        state.PostLoading = true;
      })
      .addCase(PostProject.fulfilled, (state, action) => {
        state.post = action.payload;
        state.PostLoading = false;

      })
      .addCase(PostProject.rejected, (state) => {
        state.PostLoading = false;
      });

      builder
    .addCase(GetOneProject.pending, (state) => {
        state.GetOneLoading = true;
      })
      .addCase(GetOneProject.fulfilled, (state, action) => {
        state.getoneproject = action.payload;
        state.GetOneLoading = false;

      })
      .addCase(GetOneProject.rejected, (state) => {
        state.GetOneLoading = false;
      });

      builder
      .addCase(DeleteProject.pending, (state) => {
          state.DeleteLoading = true;
        })
        .addCase(DeleteProject.fulfilled, (state, action) => {
          state.deleteproject = action.payload;
          state.DeleteLoading = false;
  
        })
        .addCase(DeleteProject.rejected, (state) => {
          state.DeleteLoading = false;
        });

        builder
        .addCase(UpdateOneProject.pending, (state) => {
            state.UpdateLoading = true;
          })
          .addCase(UpdateOneProject.fulfilled, (state, action) => {
            state.updateProject = action.payload;
            state.UpdateLoading = false;
    
          })
          .addCase(UpdateOneProject.rejected, (state) => {
            state.UpdateLoading = false;
          });

     
  },
});

export default ProjectsSlice.reducer;
