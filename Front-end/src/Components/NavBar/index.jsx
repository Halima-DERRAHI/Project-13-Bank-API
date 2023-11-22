import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/userReducer";
import Logo from '../../assets/argentBankLogo.png';
import styles from "./NavBar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("jwtToken") !== null;

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
  };

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
        {isLoggedIn ? (
          <div>
            <NavLink
              className={styles.mainNavItem}
              to="/profile"
            >
              <i className={`fa fa-user-circle ${styles.navIcon}`}></i>
              Thomas
            </NavLink>
            <NavLink
              className={styles.mainNavItem}
              to="/"
              onClick={handleLogout}
            >
              <i className={`fa fa-sign-out ${styles.navIcon}`}></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <NavLink
            className={styles.mainNavItem}
            to="/login"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;