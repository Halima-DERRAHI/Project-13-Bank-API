import React, { useState } from "react";
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
    <main>
      {showSignUp ? (
        <SignUp handleUserClick={handleUserClick} />
      ) : (
        <SignIn handleNewUserClick={handleNewUserClick} />
      )}
    </main>
  );
}

export default Login;