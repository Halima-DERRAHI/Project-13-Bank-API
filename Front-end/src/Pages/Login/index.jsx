import React, { useState } from "react";
import NavBar from "../../Components/NavBar"
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
import "./Login.module.css"

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleNewUserClick = () => {
    setShowSignUp(true);
  };

  const handleUserClick = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <NavBar />
      <main>
        {showSignUp ? (
          <SignUp handleUserClick={handleUserClick} /> 
          ) : (
          <SignIn handleNewUserClick={handleNewUserClick} />
        )}
      </main>
    </div>
  );
}

export default Login;