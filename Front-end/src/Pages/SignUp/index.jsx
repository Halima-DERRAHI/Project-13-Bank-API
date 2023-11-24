import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../Api/ApiService";
// import { checkExistingUser } from "../../Store/userActions";
import NavBar from "../../Components/NavBar"
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

  const handleSignUp = async (event) => {
    event.preventDefault();
    
    try {
      // const emailExists = await checkExistingUser(email);

      // if (emailExists) {
      //   console.error("Email already exists");
      //   return;
      // }

      const result = await createUser(email, password, firstName, lastName);
      console.log("Account created:", result);

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");

    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div>
      <NavBar/>
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
            
            <button type="submit" className={styles.signUpButton}>
              Sign Up
            </button>
          </form><br/>
          <p>
            Already have an account? <Link to="/login" className={styles.link} onClick={handleUserClick} >Sign In</Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default SignUp;