import { createSlice } from '@reduxjs/toolkit';
import{GetAllTeam,PostEmployee,GetOneEmployee,DeleteEmployee,UpdateOneEmployee} from '../Requests/TeamRequests'



const InitialValues={
    Team: [],
    post: [],
    getOneEmployee: [],
    DeleteEmployee: [],
    UpdateEmployee: [],

    GetAllLoading: false,
    postLoading: false,
    GstOneLoading: false,
    DeleteLoading: false,
    UpdateLoading: false,

    error: null,
  }


// create Slice
const TeamSlice = createSlice({
  name: 'Team',
  initialState:InitialValues ,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
    .addCase(GetAllTeam.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllTeam.fulfilled, (state, action) => {
        state.Team = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetAllTeam.rejected, (state) => {
        state.GetAllLoading = false;
      });

      builder
      .addCase(PostEmployee.pending, (state) => {
          state.postLoading = true;
        })
        .addCase(PostEmployee.fulfilled, (state, action) => {
          state.post = action.payload;
          state.postLoading = false;
  
        })
        .addCase(PostEmployee.rejected, (state) => {
          state.postLoading = false;
        });
  
        builder
    .addCase(GetOneEmployee.pending, (state) => {
        state.GstOneLoading = true;
      })
      .addCase(GetOneEmployee.fulfilled, (state, action) => {
        state.getOneEmployee = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetOneEmployee.rejected, (state) => {
        state.GstOneLoading = false;
      });

      builder
      .addCase(DeleteEmployee.pending, (state) => {
          state.DeleteLoading = true;
        })
        .addCase(DeleteEmployee.fulfilled, (state, action) => {
          state.DeleteEmployee = action.payload;
          state.DeleteLoading = false;
  
        })
        .addCase(DeleteEmployee.rejected, (state) => {
          state.DeleteLoading = false;
        });

        builder
      .addCase(UpdateOneEmployee.pending, (state) => {
          state.UpdateLoading = true;
        })
        .addCase(UpdateOneEmployee.fulfilled, (state, action) => {
          state.UpdateEmployee = action.payload;
          state.UpdateLoading = false;
  
        })
        .addCase(UpdateOneEmployee.rejected, (state) => {
          state.UpdateLoading = false;
        });
  
     
  
     

     
  },
});

export default TeamSlice.reducer;
