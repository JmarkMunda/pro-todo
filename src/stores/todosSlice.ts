import {StateCreator} from "zustand";
import {TodoListType} from "../utils/types";

export interface TodoSlice {
  todoList: TodoListType[];
  addTodoList: (data: TodoListType) => void;
  editTodoList: (id: string, data: TodoListType) => void;
  deleteTodoList: (id: string) => void;
}

export const createTodoSlice: StateCreator<TodoSlice> = set => ({
  todoList: [],
  todo: [],
  addTodoList: data => set(state => ({todoList: [...state.todoList, data]})),
  editTodoList: (id, data) =>
    set(state => {
      const updatedTodoList = state.todoList.map(item =>
        item.id === id ? data : item,
      );
      return {todoList: updatedTodoList};
    }),
  deleteTodoList: id =>
    set(state => ({todoList: state.todoList.filter(item => item.id !== id)})),
});
