import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {TodoType} from "../../utils/types";
import TodoList from "../../components/TodoList";
import AddEditModal from "../../components/AddEditModal";
import Button from "../../components/Button";

const TodoListScreen = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showModal, setShowModal] = useState(false);

  const onAddTodo = (data: TodoType) => {
    setTodos(prev => [...prev, data]);
  };

  const onEditTodo = (id: string, newData: TodoType) => {};

  const onDeleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Todos</Text>
        <Button text="New" onPress={() => setShowModal(true)} />
      </View>
      <TodoList
        data={todos}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
      />
      <AddEditModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={onAddTodo}
      />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
