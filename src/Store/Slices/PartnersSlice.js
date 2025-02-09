import { createSlice } from '@reduxjs/toolkit';
import { GetAllPartners,PostPartner,GetOnePartner,DeletePartner,UpdatePartner } from '../Requests/PartnersRequests';

const InitialVlues={
    partners: [],
    post:[],
    getOne:[],
    delete:[],
    update:[],

    GetAllLoading: false,
    PostLoading: false,
    GetOneLoading: false,
    DeleteLoading: false,
    updateLoading: false,

    error: null,
  }


// create Slice
const PartnerSlice = createSlice({
  name: 'projects',
  initialState:InitialVlues ,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
    .addCase(GetAllPartners.pending, (state) => {
        state.GetAllLoading = true;
      })
      .addCase(GetAllPartners.fulfilled, (state, action) => {
        state.partners = action.payload;
        state.GetAllLoading = false;

      })
      .addCase(GetAllPartners.rejected, (state) => {
        state.GetAllLoading = false;
      });

      builder
    .addCase(PostPartner.pending, (state) => {
        state.PostLoading = true;
      })
      .addCase(PostPartner.fulfilled, (state, action) => {
        state.post = action.payload;
        state.PostLoading = false;

      })
      .addCase(PostPartner.rejected, (state) => {
        state.PostLoading = false;
      });

        builder
          .addCase(GetOnePartner.pending, (state) => {
              state.GetOneLoading = true;
            })
            .addCase(GetOnePartner.fulfilled, (state, action) => {
              state.GetOnePartner = action.payload;
              state.GetOneLoading = false;
      
            })
            .addCase(GetOnePartner.rejected, (state) => {
              state.GetOneLoading = false;
            });
      
            builder
            .addCase(DeletePartner.pending, (state) => {
                state.DeleteLoading = true;
              })
              .addCase(DeletePartner.fulfilled, (state, action) => {
                state.delete = action.payload;
                state.DeleteLoading = false;
        
              })
              .addCase(DeletePartner.rejected, (state) => {
                state.DeleteLoading = false;
              });
      
              builder
              .addCase(UpdatePartner.pending, (state) => {
                  state.updateLoading = true;
                })
                .addCase(UpdatePartner.fulfilled, (state, action) => {
                  state.update = action.payload;
                  state.updateLoading = false;
          
                })
                .addCase(UpdatePartner.rejected, (state) => {
                  state.updateLoading = false;
                });
     

     
  },
});

export default PartnerSlice.reducer;
