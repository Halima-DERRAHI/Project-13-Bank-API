import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserToken, loginUserProfile } from "../../Store/userActions";
import styles from "./SignIn.module.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setformError] = useState("");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle remembering login information

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe");
    const token = localStorage.getItem("jwtToken");
    
    if (rememberMeValue === "true" && token) {
      navigate("/profile");
    }
  }, [navigate]);

  // Change handlers for form fields

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setformError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setformError("");
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // Handler to submit the form

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setformError("Email or password is required");
      return;
    }

    try {
      const token = await dispatch(loginUserToken({ email, password })).unwrap();

      if (token && token !== 'undefined') {
        localStorage.setItem("jwtToken", token);

        if (rememberMe) {
          localStorage.setItem("rememberMe", true);
        } else {
          localStorage.removeItem("rememberMe");
        }

        await dispatch(loginUserProfile(token)).unwrap();
        navigate("/profile");
      } else {
        setformError("Email or password is incorrect");
      }
    } catch (error) {
      navigate("/*");
    }
  };

  return (
    <main>
      <section>
        { isLoggedIn && <Navigate to="/profile" />}
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
              {formError && <p className={styles.errorMessage}>{formError}</p>}
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
              <Link to="/signup" className={styles.link}>
                Sign Up
              </Link>
            </p>
        </section>
      </section>
    </main>
  );
}

export default SignIn;