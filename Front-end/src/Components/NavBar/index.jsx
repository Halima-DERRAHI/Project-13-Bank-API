import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/argentBankLogo.png'
import styles from "./NavBar.module.css";

const Navbar = ({ showLogout, displayName }) => {
  const isLoggedIn = localStorage.getItem("jwtToken") !== null;

  return (
    <nav className={styles.nav}> 
      <NavLink to="/" className={styles.mainNavLink}> 
        <img
          className={styles.LogoImage}
          src={Logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div className={styles.navItem}>
        {showLogout && isLoggedIn ? (
          <div className={styles.mainNavItem}>
            {/* <FontAwesomeIcon icon={faUserCircle} /> */}
              {displayName}
          </div>
        ) : (
          <NavLink className={styles.mainNavItem} to="/login">
            <p>Sign in</p>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;