import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../Api/ApiService";

export const loginUserToken = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const token = await loginUser(email, password);
    return token;
  }
);