import {StyleSheet, Text, View} from "react-native";
import React from "react";
import EditIcon from "react-native-vector-icons/Feather";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import {Props} from "./types";

const Todo = ({item, onEditTodo, onDeleteTodo}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.buttons}>
          <EditIcon
            name="edit"
            size={20}
            onPress={() => onEditTodo(item.id, item)}
          />
          <DeleteIcon
            name="delete"
            size={20}
            onPress={() => onDeleteTodo(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  content: {
    flex: 1,
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
});
