import {useEffect, useMemo, useState} from "react";
import {TodoType} from "../utils/types";
import {showMessage} from "react-native-flash-message";
import {OFFSET} from "../utils/constants";
import {useTodosStore} from "../stores/store";

const useTodo = (
  id: string,
  name: string,
  searchValue: string,
  sortBy: string,
  currentPage: number,
) => {
  const {todoList, editTodoList} = useTodosStore();
  const currentTodolist = todoList.find(item => item.id === id);
  const todos = useMemo(
    () => currentTodolist?.todos ?? [],
    [currentTodolist?.todos],
  );
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
    const todosArr = [...currentTodolist!.todos, data];
    const newTodoList = {id, name, todos: todosArr};
    editTodoList(id, newTodoList);
  };

  const onEditTodo = (data: TodoType) => {
    const updatedTodo = todos.map(todo => (todo.id === data.id ? data : todo));
    const newTodoList = {
      id,
      name,
      todos: updatedTodo,
    };
    editTodoList(id, newTodoList);
  };

  const onDeleteTodo = (todoId: string) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    const newTodoList = {
      id,
      name,
      todos: newTodos,
    };
    editTodoList(id, newTodoList);
    showMessage({
      type: "success",
      message: "❌ Todo removed from the list!",
    });
  };

  const openEditModal = (newData: TodoType) => {
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
