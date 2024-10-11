import {StyleSheet, Text, View} from "react-native";
import React from "react";
import EditIcon from "react-native-vector-icons/Feather";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import {Props} from "./types";

const Todo = ({item, onEditTodo, onDeleteTodo}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
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
    borderRadius: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
});
