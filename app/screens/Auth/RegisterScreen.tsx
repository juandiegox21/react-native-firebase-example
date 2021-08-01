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

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (user) {
      await firebase.firestore().collection("users").doc(user.uid).set({
        name,
        email,
      });
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
          <Input value={name} onChangeText={(name) => setName(name)} />
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
            SignUp
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
