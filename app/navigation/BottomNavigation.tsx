import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Center, HStack, Icon, Pressable } from "native-base";

const BottomNavigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box>
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
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomNavigation;
