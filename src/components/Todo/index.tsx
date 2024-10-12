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
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
