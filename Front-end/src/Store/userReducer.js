import { createSlice } from "@reduxjs/toolkit";
import { loginUserProfile } from "../Store/userActions"

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
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
      .addCase(loginUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;