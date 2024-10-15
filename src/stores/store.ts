import {create} from "zustand";
import {createTodoSlice, TodoSlice} from "./todosSlice";

export const useTodosStore = create<TodoSlice>((...a) => ({
  ...createTodoSlice(...a),
}));
