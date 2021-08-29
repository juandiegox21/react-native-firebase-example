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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(result);
  };

  return (
    <Box safeArea flex={1} p={2} w="90%" mx="auto">
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>

      <Heading color="muted.400" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Email ID
          </FormControl.Label>
          <Input value={email} onChangeText={(email) => setEmail(email)} />
        </FormControl>

        <FormControl mb={5}>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Password
          </FormControl.Label>

          <Input
            type="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <Link
            _text={{ fontSize: "xs", fontWeight: "700", color: "cyan.500" }}
            alignSelf="flex-end"
            mt={1}
          >
            Forgot Password?
          </Link>
        </FormControl>

        <VStack space={2}>
          <Button colorScheme="cyan" _text={{ color: "white" }} onPress={login}>
            Login
          </Button>

          <HStack justifyContent="center" alignItems="center">
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

        <HStack justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{ color: "cyan.500", bold: true, fontSize: "sm" }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
