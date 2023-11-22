import React from 'react';
import NavBar from "../../Components/NavBar"
import Feature from '../../Components/Feature';
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import styles from './Home.module.css'

function Home() {
    return(
        <div>
            <NavBar />
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
                <Feature imgSrc={iconChat} imgAlt="Chat Icon" titre="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <Feature imgSrc={iconMoney} imgAlt="Money Icon" titre="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />
                <Feature imgSrc={iconSecurity} imgAlt="Security Icon" titre="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </div>
    );
};

export default Home;