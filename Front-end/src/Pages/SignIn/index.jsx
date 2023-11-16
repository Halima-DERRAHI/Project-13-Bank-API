import React from "react";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../../Store/userActions";
import styles from "./SignIn.module.css";

function SignIn() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = await dispatch(loginUserApi({ email, password })).unwrap();
    localStorage.setItem("jwtToken", token);
  }

  return (
    <div>
      <main>
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
          </form>
        </section>
      </main>
    </div>
  );
}

export default SignIn;