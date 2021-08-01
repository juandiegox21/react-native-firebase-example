import React, { useState, useEffect } from "react";
import firebase from "firebase";

import LoginScreen from "./Auth/LoginScreen";
import HomeScreen from "./HomeScreen";

const LoginApp = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);
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
  return <HomeScreen user={user} />;
};

const LandingScreen = () => {
  return <LoginApp />;
};

export default LandingScreen;