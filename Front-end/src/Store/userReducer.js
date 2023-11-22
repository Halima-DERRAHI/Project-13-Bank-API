import { createSlice } from "@reduxjs/toolkit";

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
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;