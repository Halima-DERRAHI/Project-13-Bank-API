import React from "react";
import styles from "./Account.module.css"

function Account({ title, amount, description }) {
  return (
    <div className={styles.account}>
      <div className={styles.infoContainer}>
        <h3 className={styles.accountTitle}>
          {title}
        </h3>
        <p className={styles.accountAmount}>{amount}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.viewButton}>View transactions</button>
      </div>
    </div>
  );
};

export default Account;