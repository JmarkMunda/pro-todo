import {useEffect, useState} from "react";
import {TodoType} from "../utils/types";
import {showMessage} from "react-native-flash-message";
import {OFFSET} from "../utils/constants";

const useTodo = (searchValue: string, sortBy: string, currentPage: number) => {
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
    showMessage({
      type: "success",
      message: "❌ Todo removed from the list!",
    });
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

  const getPaginatedTodos = (data: TodoType[]) => {
    const start = (currentPage - 1) * OFFSET;
    const end = start + OFFSET;
    return data.slice(start, end);
  };

  const displayedTodos = searchValue ? filteredTodos : todos;
  const sortedTodos = getSortedTodosByTitle(displayedTodos);
  const paginatedTodos = getPaginatedTodos(sortedTodos);

  // console.log("--------------------");
  // console.log(JSON.stringify(paginatedTodos, null, 2));

  return {
    todos: paginatedTodos,
    totalTodos: todos.length,
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
