import { createSlice } from "@reduxjs/toolkit";
import { loginUserApi } from "./userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.profile = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserApi.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logoutUser, updateName } = userSlice.actions;

export default userSlice.reducer;