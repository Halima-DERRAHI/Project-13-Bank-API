import React from 'react';
// import iconChat from "../../assets/icon-chat.png";
// import iconMoney from "../../assets/icon-money.png";
// import iconSecurity from "../../assets/icon-security.png";
import styles from './Home.module.css'

function Home() {
    return(
        <div>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h2 className={styles.srOnly}>Promoted Content</h2>
                    <p className={styles.subtitle}>No fees.</p>
                    <p className={styles.subtitle}>No minimum deposit.</p>
                    <p className={styles.subtitle}>High interest rates.</p>
                    <p className={styles.text}>Open a savings account with Argent Bank today!</p>
                </div>
            </div>
            <section className={styles.features}>
                <h2 className={styles.srOnly}>Features</h2>
            </section>
        </div>
    );
};

export default Home;