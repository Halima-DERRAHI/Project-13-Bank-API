import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
