import { createSlice } from "@reduxjs/toolkit";
import { ContactEmail } from "../Requests/ContactUsRequests";

const InitialVlues = {
  email: [],
  emailLoading: false,
  error: null,
};

const ContactSlice = createSlice({
  name: "contact",
  initialState: InitialVlues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ContactEmail.pending, (state) => {
        state.emailLoading = true;
      })
      .addCase(ContactEmail.fulfilled, (state, action) => {
        state.email = action.payload;
        state.emailLoading = false;
      })
      .addCase(ContactEmail.rejected, (state) => {
        state.emailLoading = false;
      });
  },
});

export default ContactSlice.reducer;
