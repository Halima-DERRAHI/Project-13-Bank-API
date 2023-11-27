import { createSlice } from "@reduxjs/toolkit";
import { loginUserProfile } from "./userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    isLoggedIn: false,
  },
  reducers: {
    logoutUser: (state) => {
      return {
        ...state,
        profile: null,
        isLoggedIn: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserProfile.fulfilled, (state, { payload }) => {
      return {
        ...state,
        profile: payload,
        isLoggedIn: true,
      };
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;