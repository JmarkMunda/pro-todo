import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {TodoType} from "../../utils/types";
import TodoList from "../../components/TodoList";
import AddEditModal from "../../components/AddEditModal";
import Button from "../../components/Button";
import {showMessage} from "react-native-flash-message";

const TodoListScreen = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState<TodoType | null>(null);

  const onSubmit = (data: TodoType) => {
    if (Object.entries(editingTodo || {}).length > 0) {
      onEditTodo(data);
      setEditingTodo(null);
    } else {
      onAddTodo(data);
    }
  };

  const onAddTodo = (data: TodoType) => {
    setTodos(prev => [...prev, data]);
  };

  const openEditModal = (id: string, newData: TodoType) => {
    setShowModal(true);
    setEditingTodo(newData);
  };

  const onEditTodo = (data: TodoType) => {
    const updatedTodo = todos.map(todo => (todo.id === data.id ? data : todo));
    setTodos(updatedTodo);
  };

  const onDeleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    showMessage({type: "success", icon: "success", message: "Deleted"});
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Todos</Text>
        <Button text="New" onPress={() => setShowModal(true)} />
      </View>
      <TodoList
        data={todos}
        onEditTodo={openEditModal}
        onDeleteTodo={onDeleteTodo}
      />
      <AddEditModal
        isVisible={showModal}
        isEditing={Object.keys(editingTodo || {}).length > 0}
        editingTodo={editingTodo}
        onClose={() => setShowModal(false)}
        onSubmit={onSubmit}
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
