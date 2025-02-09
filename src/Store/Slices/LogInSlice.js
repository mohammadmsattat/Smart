import { createSlice } from '@reduxjs/toolkit';
import { LogInRequest } from '../Requests/LogInRequest';

const InitialVlues={
    login: [],
    loading: false,
    error: null,
  }


// create Slice
const LogInSlice = createSlice({
  name: 'login',
  initialState:InitialVlues ,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
    .addCase(LogInRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(LogInRequest.fulfilled, (state, action) => {
        state.login = action.payload;
        state.loading = false;

      })
      .addCase(LogInRequest.rejected, (state) => {
        state.loading = false;
      });

     

     
  },
});

export default LogInSlice.reducer;
