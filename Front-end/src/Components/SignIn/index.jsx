import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserToken, loginUserProfile } from "../../Store/userActions";
import styles from "./SignIn.module.css";

function SignIn({ handleNewUserClick }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if ( rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
    if (localStorage.getItem("jwtToken")) {
      setLoggedIn(true);
    }

  }, []);  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    let token;
    try {
      token = await dispatch(loginUserToken({ email, password })).unwrap();

    } catch (error) {
      navigate("/*");
      return;
    }
  
    if (token && token !== 'undefined') {
      localStorage.setItem("jwtToken", token);
      setLoggedIn(true);
      await dispatch(loginUserProfile(token)).unwrap();
      navigate("/profile");
  
      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      }
      else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }
    } else {
      navigate("/*");
    }
  }
  
  return (
    <div>
      {loggedIn && <Navigate to="/profile" />}
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="unique-email"
              className={styles.input}
              onChange={handleEmailChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="unique-password"
              className={styles.input}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.rememberMe}>
            <input 
              type="checkbox" 
              id="remember-me" 
              className={styles.checkbox} 
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me" className={styles.rememberMeLabel}>
              Remember me
            </label>
          </div>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form><br/>
        <p>
            New user?{" "}
            <span className={styles.link} onClick={handleNewUserClick}>
              Sign Up
            </span>
          </p>
      </section>
    </div>
  );
}

export default SignIn;