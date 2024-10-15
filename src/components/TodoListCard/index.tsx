import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Props} from "./types";

const TodoListCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.id, item.name)}
      style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {item.name}
      </Text>
      <Text style={styles.details}># of todos {item.todos.length}</Text>
    </TouchableOpacity>
  );
};

export default TodoListCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 8,
    borderRadius: 8,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    color: "#cccccc",
  },
});
