import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default ErrorPage;
