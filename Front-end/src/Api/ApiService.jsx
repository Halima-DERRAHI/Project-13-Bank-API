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
  }
};


export const getUserProfile = async (jwtToken) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return response.data.body;

  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const createUser = async (email, password, firstName, lastName) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/signup",
      {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }
    );
    return response.data;
    
  } catch (error) {
    console.error("Error creating user:", error);

  }
};

export const updateUserProfileApi = async (jwtToken, updatedProfile) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      updatedProfile,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Erreur lors de la mise à jour du profil.");
    }
    return response.data.body;
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};