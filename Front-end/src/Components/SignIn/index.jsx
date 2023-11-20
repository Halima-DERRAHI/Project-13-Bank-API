import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserToken } from "../../Store/userActions";
import styles from "./SignIn.module.css";

function SignIn({ handleNewUserClick }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await dispatch(loginUserToken({ email, password })).unwrap();
      console.log("Token:", token);
      
      if (token && token !== 'undefined') {
        localStorage.setItem("jwtToken", token);
        setLoggedIn(true);
        navigate("/profile");

        console.log("login OK");

      } else {
        navigate("/*");
      }

    } catch (error) {
      navigate("/*");
    }
  }

  return (
    <div>
      {loggedIn && <Navigate to="/profile" />}
        <section className={styles.signInContent}>
          <span className="fa fa-user-circle"></span>
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
              <input type="checkbox" id="remember-me" className={styles.checkbox} />
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