import {FlatList, StyleSheet} from "react-native";
import React from "react";
import Todo from "../Todo";
import {Props} from "./types";
import {SCREEN_HEIGHT} from "../../utils/constants";

const TodoList = ({data, onEditTodo, onDeleteTodo}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Todo item={item} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
      )}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: SCREEN_HEIGHT / 1.8,
  },
  content: {
    gap: 16,
  },
});
