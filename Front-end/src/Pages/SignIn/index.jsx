import React from "react";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div>
      <main>
        <section className={styles.signInContent}>
          <i className={styles.icon}></i>
          <h1>Sign In</h1>
          <form>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="unique-email"
                className={styles.input}
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="unique-password"
                className={styles.input}
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