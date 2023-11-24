import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserProfile, updateUserProfile } from "../../Store/userActions";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Account from "../../Components/Account"
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate('/login');
    } else {
      dispatch(loginUserProfile(token));
      navigate('/profile');
    }
  }, [navigate, dispatch]);

  const { firstName, lastName } = profile || {};
  const [editMode, setEditMode] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);

  const handleSave = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const updatedProfile = {
      firstName: inputFirstName,
      lastName: inputLastName,
    };

    dispatch(updateUserProfile({ token: jwtToken, updatedProfile }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setInputFirstName(firstName);
    setInputLastName(lastName);
    setEditMode(false);
  };

  return (
    <div>
      <NavBar/>
      <main>
        <header>
          <h1 className={styles.profileTitle}>
            Welcome back <br /> {firstName} {lastName}!
            <br />
          </h1>
        </header>
        {!editMode ? (
          <div>
            <button
              className={styles.editNameButton}
              onClick={() => setEditMode(true)}
            >
              Edit Name
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                // placeholder={inputFirstName}
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
              <input
                type="text"
                // placeholder={inputLastName}
                value={inputLastName}
                onChange={(e) => setInputLastName(e.target.value)}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleSave} className={styles.bouton}>Save</button>
              <button onClick={handleCancel} className={styles.bouton}>Cancel</button>
            </div>
          </div>
        )}
        <div className={styles.accountContainer}>
          <h2 className="sr-only">Accounts</h2>
          <Account 
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
          <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </div>
      </main>
    </div>
  );
};

export default Profile;