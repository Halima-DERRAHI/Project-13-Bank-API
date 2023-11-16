import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: email,
        password: password,
      }
    );
    const jwtToken = response.data.body.token;
    return jwtToken;
    
  } catch (error) {
    console.error("Error logging in:", error);

    if (error.response) {
      const errorCode = error.response.status;

      if (errorCode === 400) {
        console.error("Invalid fields or bad request.");
      } else if (errorCode === 500) {
        console.error("Internal server error.");
      }
    }
  }
};