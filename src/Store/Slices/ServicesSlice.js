import { createSlice } from '@reduxjs/toolkit';
import { GetAllServices,
          DeleteOneService ,
          PostService ,
          GetOneService,
          UpdateOneService} from '../Requests/ServicesRequestes';




const InitialValues={
    services: [],
    post:[],
    delete:[],
    update:[],
    getOneService:[],

    GetAllLoading: false,
    PostLoading: false,
    deleteLoading: false,
    getOneLoading: false,
    UpdateLoading: false,

    error: null,
  }


// create Slice
const ServicesSlice = createSlice({
  name: 'Service',
  initialState:InitialValues ,
  reducers: {},
  extraReducers: (builder) => {
    
      //get builder
    builder
    .addCase(GetAllServices.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetAllServices.rejected, (state) => {
        state.GetAllLoading = false;
      });

        //post builder
      builder
      .addCase(PostService.pending, (state) => {
          state.PostLoading = true;
        })
        .addCase(PostService.fulfilled, (state, action) => {
          state.post = action.payload;
          state.PostLoading = false;
  
        })
        .addCase(PostService.rejected, (state) => {
          state.PostLoading = false;
        });

        //delete builder
        builder
      .addCase(DeleteOneService.pending, (state) => {
          state.deleteLoading = true;
        })
        .addCase(DeleteOneService.fulfilled, (state, action) => {
          state.delete = action.payload;
          state.deleteLoading = false;
  
        })
        .addCase(DeleteOneService.rejected, (state) => {
          state.deleteLoading = false;
        });

          //get one service builder
        builder
        .addCase(GetOneService.pending, (state) => {
            state.getOneLoading = true;
          })
          .addCase(GetOneService.fulfilled, (state, action) => {
            state.getOneService = action.payload;
            state.getOneLoading = false;
    
          })
          .addCase(GetOneService.rejected, (state) => {
            state.getOneLoading = false;
          });

            //updat service builder
          builder
          .addCase(UpdateOneService.pending, (state) => {
              state.UpdateLoading = true;
            })
            .addCase(UpdateOneService.fulfilled, (state, action) => {
              state.update = action.payload;
              state.UpdateLoading = false;
      
            })
            .addCase(UpdateOneService.rejected, (state) => {
              state.UpdateLoading = false;
            });
  
     

     
  },
});

export default ServicesSlice.reducer;
