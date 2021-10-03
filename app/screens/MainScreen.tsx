import React, { useState, useEffect } from "react";
import firebase from "firebase";

import LoginScreen from "./Auth/LoginScreen";
import HomeScreen from "./HomeScreen";
import { useAppDispatch } from "../hooks";
import { setData, User } from "../modules/user/userSlice";

const LoginApp = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // User
  const [user, setUser] = useState();

  const dispatch = useAppDispatch();

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);

    if (user) {
      const { uid, email } = user;

      const userData: User = {
        uid,
        email,
      };

      dispatch(setData(userData));
    }

    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // User is not logged in
  if (!user) {
    return <LoginScreen />;
  }

  // User is logged in
  const homeScreen = <HomeScreen />;
  return homeScreen;
};

const MainScreen = () => {
  return <LoginApp />;
};

export default MainScreen;
