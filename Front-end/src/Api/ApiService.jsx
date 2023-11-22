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
    return {
      status: response.data.status,
      message: response.data.message,
      body: response.data.body,
    };
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

// export const updateUserData =async(newData, token)=>{
//   const config={
//       headers: {
//           Authorization:`Bearer ${token}`
//       }
//   }
//   return await axios.put(API_URL + 'profile', newData, config)
//       .then((res)=>{
//           return res.data.body})
//       .catch((error)=>console.log(error))
// };

