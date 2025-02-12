import { createSlice } from "@reduxjs/toolkit";
import {
  GetOurInformation,
  UpdateInformations,
} from "../Requests/OurInformationRequests";

const InitialVlues = {
  informations: [],
  update: [],

  loading: false,
  updateLoading: false,
  error: null,
};

// create Slice
const OurInformationSlice = createSlice({
  name: "information",
  initialState: InitialVlues,
  reducers: {},
  extraReducers: (builder) => {
    //get information builder
    builder
      .addCase(GetOurInformation.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetOurInformation.fulfilled, (state, action) => {
        state.informations = action.payload;
        state.loading = false;
      })
      .addCase(GetOurInformation.rejected, (state) => {
        state.loading = false;
      });

    //update builder
    builder
      .addCase(UpdateInformations.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(UpdateInformations.fulfilled, (state, action) => {
        state.update = action.payload;
        state.updateLoading = false;
      })
      .addCase(UpdateInformations.rejected, (state) => {
        state.updateLoading = false;
      });
  },
});

export default OurInformationSlice.reducer;
