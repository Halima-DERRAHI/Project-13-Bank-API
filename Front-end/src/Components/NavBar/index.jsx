import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/userReducer";
import Logo from '../../assets/argentBankLogo.png';
import styles from "./NavBar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const profile = useSelector((state) => state.user.profile);
  const firstName = profile ? profile.firstName : '';

  const handleLogout = () => {
    dispatch(logoutUser());
    sessionStorage.removeItem("jwtToken");
    navigate("/");
  };
  
  console.log("NavBar :" + isLoggedIn);

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
              {firstName}
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
            <i className={`fa fa-user-circle ${styles.navIcon}`}></i>
            {isLoggedIn ? firstName : "Sign In"}
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;