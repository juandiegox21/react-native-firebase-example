import React, { useState } from "react";
import firebase from "firebase";
import { Box, Text, Center, HStack, Icon, Pressable } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Center flex={1}></Center>
      <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="heart" />}
              color="white"
              size="md"
            />

            <Text color="white" fontSize={14}>
              Favorites
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py={2}
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="newspaper" />}
              color="white"
              size="md"
            />

            <Text color="white" fontSize={14}>
              News
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="face-profile" />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize={14}>
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default HomeScreen;
