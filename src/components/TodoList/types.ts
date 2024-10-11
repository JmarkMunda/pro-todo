import {TodoType} from "../../utils/types";

export type Props = {
  data: TodoType[];
  onEditTodo: (id: string, newData: TodoType) => void;
  onDeleteTodo: (id: string) => void;
};
