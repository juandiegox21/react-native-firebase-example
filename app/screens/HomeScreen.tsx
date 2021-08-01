import React from "react";
import firebase from "firebase";
import { Box, Text, Button } from "native-base";

const HomeScreen = (props) => {
  const logout = async () => {
    await firebase.auth().signOut();
  };

  console.log(props);

  return (
    <Box safeArea>
      <Text>Welcome back {props.user.email}</Text>

      <Button onPress={logout}>Sign out</Button>
    </Box>
  );
};

export default HomeScreen;
