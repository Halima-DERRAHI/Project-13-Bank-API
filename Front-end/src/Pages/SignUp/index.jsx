import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../Api/ApiService";
import styles from "./SignUp.module.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formError, setFormError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFormError("");
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setFormError("");
  };
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFormError("");
  };
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setFormError("");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    if (!(email && password && firstName && lastName)) {
      setFormError("All fields are required.");
      return;
    }
  
    try {
      setFormError("");
      await createUser(email, password, firstName, lastName);

      setSignUpSuccess(true);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      
    } catch (error) {
      setFormError("This user already exists");
    }
  };
  
  return (
    <main>
      <section className={styles.signUpContent}>
        <span className={`fa fa-user-circle ${styles.signIcon}`}></span>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>

        <div className={styles.inputWrapper}>
            <label htmlFor="signup-firstname">First Name</label>
            <input
              type="text"
              id="signup-firstname"
              name="signup-unique-firstname"
              className={styles.input}
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="signup-lastname">Last Name</label>
            <input
              type="text"
              id="signup-lastname"
              name="signup-unique-lastname"
              className={styles.input}
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              name="signup-unique-email"
              className={styles.input}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="signup-unique-password"
              className={styles.input}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {formError && <p className={styles.errorMessage}>{formError}</p>}

          {signUpSuccess &&
          <p className={styles.successMessage}>Sign up successful! <br/> You can now sign in.</p>
          }

          <button type="submit" className={styles.signUpButton}>
            Sign Up
          </button>
        </form><br/>
        <p>
          Already have an account? <Link to="/login" className={styles.link} >Sign In</Link>
        </p>
      </section>
    </main>
  );
}

export default SignUp;