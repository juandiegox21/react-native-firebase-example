import React from "react";
import firebase from "firebase";
import { Box, Text, Button } from "native-base";

const HomeScreen = ({ navigation }) => {
  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Box safeArea>
      <Text>Welcome back</Text>

      <Button onPress={logout}>Sign out</Button>
    </Box>
  );
};

export default HomeScreen;
