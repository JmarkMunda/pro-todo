export type TodoType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export type TodoListType = {
  id: string;
  name: string;
  todos: TodoType[];
};
