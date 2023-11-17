import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    isLoggedIn: false,
  },
});

export default userSlice.reducer;