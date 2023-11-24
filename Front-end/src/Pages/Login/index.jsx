import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserToken, loginUserProfile } from "../../Store/userActions";
import NavBar from "../../Components/NavBar"
import styles from "./SignIn.module.css";

function SignIn({ handleNewUserClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe");
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberMeValue === "true" && rememberedEmail && rememberedPassword) {
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
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      const token = await dispatch(loginUserToken({ email, password })).unwrap();

      if (token && token !== 'undefined') {
        localStorage.setItem("jwtToken", token);
        await dispatch(loginUserProfile(token)).unwrap();
        navigate("/profile");
      } else {
        setPasswordError("Email or password is incorrect");
      }

      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }
    } catch (error) {
      navigate("/*");
    }
  };

  return (
    <div>
      <NavBar/>
      <main>
        <section>
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
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <p className={styles.errorMessage}>{emailError}</p>}
              </div>

              <div className={styles.inputWrapper}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="unique-password"
                  className={styles.input}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
              </div>
              <div className={styles.rememberMe}>
                <input 
                  type="checkbox" 
                  id="remember-me" 
                  className={styles.checkbox} 
                  onChange={handleRememberMeChange}
                  checked={rememberMe}
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
                <Link to="/signup" className={styles.link} onClick={handleNewUserClick}>
                  Sign Up
                </Link>
              </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default SignIn;