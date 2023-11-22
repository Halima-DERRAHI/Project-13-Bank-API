import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, getUserProfile } from "../Api/ApiService";

export const loginUserToken = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const token = await loginUser(email, password);
    return token;
  }
);

export const loginUserProfile = createAsyncThunk(
  "user/loginUserProfile",
  async (token) => {
    const userProfile = await getUserProfile(token);
    return userProfile;
  }
);