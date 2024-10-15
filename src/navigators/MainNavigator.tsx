import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TodoListScreen from "../screens/TodoListScreen";
import DashboardScreen from "../screens/DashboardScreen";
import {RootStackParamList} from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Todo List" component={TodoListScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
