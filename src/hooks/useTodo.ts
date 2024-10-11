import {useEffect, useState} from "react";
import {TodoType} from "../utils/types";
import {showMessage} from "react-native-flash-message";

const useTodo = (searchValue: string, sortBy: string) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState<TodoType | null>(null);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    if (searchValue) {
      const searchedTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredTodos(searchedTodos);
    } else {
      setFilteredTodos(todos);
    }
  }, [searchValue, todos]);

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

  const onEditTodo = (data: TodoType) => {
    const updatedTodo = todos.map(todo => (todo.id === data.id ? data : todo));
    setTodos(updatedTodo);
  };

  const onDeleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    showMessage({type: "success", icon: "success", message: "Deleted"});
  };

  const openEditModal = (id: string, newData: TodoType) => {
    openModal();
    setEditingTodo(newData);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const getSortedTodosByTitle = (data: TodoType[]) => {
    return [...data].sort((a, b) => {
      if (sortBy === "asc") {
        return a.title > b.title ? 1 : -1;
      } else if (sortBy === "desc") {
        return a.title < b.title ? 1 : -1;
      }
      return 0;
    });
  };

  const displayedTodos = searchValue ? filteredTodos : todos;
  const sortedTodos = getSortedTodosByTitle(displayedTodos);

  return {
    todos: sortedTodos,
    showModal,
    editingTodo,
    onSubmit,
    onAddTodo,
    onEditTodo,
    onDeleteTodo,
    openEditModal,
    openModal,
    closeModal,
  };
};

export default useTodo;
