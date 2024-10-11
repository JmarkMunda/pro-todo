import React from "react";
import {SafeAreaView, StatusBar} from "react-native";
import FlashMessage from "react-native-flash-message";
import TodoListScreen from "./src/screens/TodoListScreen";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      {/* STATUS BAR */}
      <StatusBar />

      {/* TODO LIST */}
      <TodoListScreen />

      {/* ALERT MESSAGE */}
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

export default App;
