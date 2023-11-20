import React, { useState } from "react";
import styles from "./SignUp.module.css";

function SignUp({ handleUserClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    
    console.log("Signed Up with:", email, password, firstName, lastName);
  
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <section className={styles.signUpContent}>
      <span className="fa fa-user-circle"></span>
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
        
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
      </form><br/>
      <p>
        Already have an account? <br/><span className={styles.link} onClick={handleUserClick} >Sign In</span>
      </p>
    </section>
  );
}

export default SignUp;