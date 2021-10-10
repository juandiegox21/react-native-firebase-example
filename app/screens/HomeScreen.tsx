import React from "react";
import firebase from "firebase";
import { Box, Text, Button, ScrollView } from "native-base";
import { useAppSelector } from "../hooks";
import BottomNavigation from "../navigation/BottomNavigation";

const HomeScreen = () => {
  const { uid, email } = useAppSelector((state) => state.user.data);
  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Box flex={1} bg="white" safeArea>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          mb: "4",
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
          tellus egestas, condimentum justo maximus, sollicitudin nunc.
          Suspendisse leo ligula, aliquet id pretium nec, volutpat ut est.
          Quisque eget scelerisque tellus, vitae dapibus dolor. Vestibulum
          iaculis eros vitae ipsum condimentum, at posuere nisl mattis. Maecenas
          vel ipsum tincidunt, gravida magna quis, faucibus magna. Maecenas
          faucibus consequat eleifend. Mauris tincidunt, lacus quis maximus
          dictum, diam augue fringilla nibh, vel rhoncus dolor risus at felis.
          Nullam sit amet ante vitae lorem sollicitudin placerat a non nunc.
          Aenean a ligula quis lectus aliquet aliquam at in nunc. Maecenas ac
          risus at nisi ultrices placerat et ullamcorper odio. Suspendisse sit
          amet justo eget dui hendrerit viverra et ac urna. Duis dapibus odio
          mi, ut sagittis tellus placerat sit amet. Nam fermentum eros vel lacus
          volutpat mollis. In dignissim velit sed consequat vestibulum. In hac
          habitasse platea dictumst. Praesent euismod neque et semper aliquet.
          Aenean blandit risus ac ante rhoncus pretium. Morbi a tincidunt felis,
          a elementum libero. Suspendisse vulputate arcu volutpat luctus tempor.
          Nam ac sodales tortor. Sed tempus pulvinar dictum. Curabitur velit
          lectus, sodales ac quam ac, posuere congue mi. Vestibulum sed urna
          eget mi faucibus hendrerit dignissim ac nunc. Nam vel arcu vitae
          mauris tincidunt pulvinar. Integer varius vel magna sed feugiat. Etiam
          at urna faucibus, tincidunt quam at, sodales urna. Aliquam blandit
          tellus et dolor efficitur commodo. Integer ut ornare ipsum. Curabitur
          vulputate quam tortor, nec placerat purus mattis non. Morbi eget
          fringilla lectus, quis aliquam erat. Praesent interdum viverra lectus
          sed pretium. Maecenas cursus cursus ex et interdum. Nam faucibus magna
          vitae urna suscipit ullamcorper. Vivamus vitae egestas elit. Cras non
          turpis auctor, viverra ex id, consectetur orci. In venenatis mattis
          feugiat. Nullam ac sem justo. Nunc sagittis urna vel dolor placerat,
          sit amet tincidunt felis pretium. Aliquam finibus vel libero vitae
          aliquet. Etiam sodales commodo finibus. Nulla facilisi. Donec a tempus
          augue. Aliquam consectetur nunc massa. Quisque pretium imperdiet diam,
          eu porttitor turpis faucibus id.
        </Text>
      </ScrollView>
      {/* Divide the bottom navigation from the content  */}
      <Box flex={1}></Box>
      <BottomNavigation />
    </Box>
  );
};

export default HomeScreen;
