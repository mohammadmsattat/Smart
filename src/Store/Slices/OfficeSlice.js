import { createSlice } from '@reduxjs/toolkit';
import { GetAllOffices,PostOffice,GetOneOffice,DeleteOffice,UpdateOneOffice } from '../Requests/OfficeRequests';


const InitialVlues={
    offices: [],
    post:[],
    getOne:[],
    delete:[],
    update:[],

    GetAllLoading: false,
    PostLoading: false,
    GetOneLoading: false,
    DeleteLoading: false,
    UpdateLoading: false,

    error: null,
  }


// create Slice
const OfficeSlice = createSlice({
  name: 'office',
  initialState:InitialVlues ,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
    .addCase(GetAllOffices.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllOffices.fulfilled, (state, action) => {
        state.offices = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetAllOffices.rejected, (state) => {
        state.GetAllLoading = false;
      });

      builder
    .addCase(PostOffice.pending, (state) => {
        state.PostLoading = true;
      })
      .addCase(PostOffice.fulfilled, (state, action) => {
        state.post = action.payload;
        state.PostLoading = false;

      })
      .addCase(PostOffice.rejected, (state) => {
        state.PostLoading = false;
      });


      builder
      .addCase(GetOneOffice.pending, (state) => {
          state.GetOneLoading = true;
        })
        .addCase(GetOneOffice.fulfilled, (state, action) => {
          state.getOne = action.payload;
          state.GetOneLoading = false;
  
        })
        .addCase(GetOneOffice.rejected, (state) => {
          state.GetOneLoading = false;
        });

        builder
        .addCase(DeleteOffice.pending, (state) => {
            state.DeleteLoading = true;
          })
          .addCase(DeleteOffice.fulfilled, (state, action) => {
            state.delete = action.payload;
            state.DeleteLoading = false;
    
          })
          .addCase(DeleteOffice.rejected, (state) => {
            state.DeleteLoading = false;
          });

          builder
          .addCase(UpdateOneOffice.pending, (state) => {
              state.UpdateLoading = true;
            })
            .addCase(UpdateOneOffice.fulfilled, (state, action) => {
              state.update = action.payload;
              state.UpdateLoading = false;
      
            })
            .addCase(UpdateOneOffice.rejected, (state) => {
              state.UpdateLoading = false;
            });
     

     
  },
});

export default OfficeSlice.reducer;
