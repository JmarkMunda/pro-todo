import React from "react";
import {SafeAreaView, StatusBar} from "react-native";
import FlashMessage from "react-native-flash-message";
import TodoListScreen from "./src/screens/TodoListScreen";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />

      {/* TODO LIST */}
      <TodoListScreen />

      <FlashMessage position="top" floating />
    </SafeAreaView>
  );
}

export default App;
