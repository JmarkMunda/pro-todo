import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Props} from "./types";
import ActionIcon from "react-native-vector-icons/Ionicons";

const TodoListCard = ({item, onPress, onActionPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.id, item.name)}
      style={styles.container}>
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => onActionPress(item)}>
          <ActionIcon name="ellipsis-vertical" size={20} />
        </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    color: "#cccccc",
  },
});
