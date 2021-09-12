import React from "react";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import MainStackNavigator from "./app/navigation/MainStackNavigator";
import store from "./app/store";
import firebaseConfig from "./app/firebaseConfig";
import firebase from "firebase";

// Initialize firebase if it hasn't been initialized already
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainStackNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
