import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import FlashMessage from "react-native-flash-message";
import MainNavigator from "./src/navigators/MainNavigator";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <FlashMessage position="top" floating />
    </GestureHandlerRootView>
  );
}

export default App;
