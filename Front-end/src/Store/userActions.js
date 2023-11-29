import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, getUserProfile, updateUserProfileApi } from "../Api/ApiService";

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

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, updatedProfile }) => {
    try {
      const data = await updateUserProfileApi(token, updatedProfile);
      return data;
    } catch (error) {
      return console.log(error.message);
    }
  }
);