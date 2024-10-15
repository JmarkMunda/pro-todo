import {FlatList, StyleSheet, View} from "react-native";
import React from "react";
import Todo from "../Todo";
import {Props} from "./types";
import {SCREEN_HEIGHT} from "../../utils/constants";
import Empty from "../Empty";
import {noTask} from "../../assets";

const TodoList = ({data, onEditTodo, onDeleteTodo}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Todo item={item} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Empty
            text="No todos"
            description="You have no todos at the moment"
            image={noTask}
          />
        </View>
      }
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    height: SCREEN_HEIGHT / 2,
  },
  content: {
    gap: 16,
  },
  emptyContainer: {
    height: SCREEN_HEIGHT / 2,
  },
});
