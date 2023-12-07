import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserProfile, updateUserProfile } from "../../Store/userActions";
import { useNavigate } from "react-router-dom";
import Account from "../../Components/Account"
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check for JWT token in session storage

  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
  
    if (token) {
      dispatch(loginUserProfile(token));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);  

  // Retrieve user profile from Redux store

  const profile = useSelector((state) => state.user.profile);

  const { firstName, lastName } = profile || {};
  const [editMode, setEditMode] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);

  // Sync input field values with profile when it updates

  useEffect(() => {
    setInputFirstName(firstName);
    setInputLastName(lastName);
  }, [firstName, lastName]);

  // Save the profile changes
  
  const handleSave = () => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    const updatedProfile = {
      firstName: inputFirstName,
      lastName: inputLastName,
    };

    dispatch(updateUserProfile({ token: jwtToken, updatedProfile }))
    .then(() => {
      dispatch(loginUserProfile(jwtToken));
      setEditMode(false);
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    });
  };

  const handleCancel = () => {
    setInputFirstName(firstName);
    setInputLastName(lastName);
    setEditMode(false);
  };

  return (
    <div>
      <main>
        <header>
          <h1 className={styles.profileTitle}>
            Welcome back
          </h1>
        </header>
        {!editMode ? (
          <div>
            <h1 className={styles.profileName}>{firstName} {lastName}!</h1>
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
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
              <input
                type="text"
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