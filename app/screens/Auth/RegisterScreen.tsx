import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
} from "native-base";

import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const signUp = async () => {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (user) {
      await user.updateProfile({
        displayName: displayName,
      });

      await firebase.firestore().collection("users").doc(user.uid).set({
        displayName,
        email,
      });

      return navigation.goBack();
    }
  };

  return (
    <Box safeArea flex={1} p={2} w="90%" mx="auto">
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>

      <Heading color="muted.400" size="xs">
        Sign up to continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Name
          </FormControl.Label>
          <Input
            value={displayName}
            onChangeText={(displayName) => setDisplayName(displayName)}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Email
          </FormControl.Label>
          <Input value={email} onChangeText={(email) => setEmail(email)} />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Password
          </FormControl.Label>
          <Input
            value={password}
            onChangeText={(password) => setPassword(password)}
            type="password"
          />
        </FormControl>
        <VStack space={2} mt={5}>
          <Button
            colorScheme="cyan"
            _text={{ color: "white" }}
            onPress={signUp}
          >
            Sign Up
          </Button>

          <HStack justifyContent="center">
            <IconButton
              variant="unstyled"
              icon={
                <Icon
                  as={<MaterialCommunityIcons name="google" />}
                  color="muted.700"
                  size="sm"
                />
              }
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default RegisterScreen;
