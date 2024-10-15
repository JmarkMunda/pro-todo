import {TodoType} from "../../utils/types";

export type Props = {
  data: TodoType[];
  onEditTodo: (newData: TodoType) => void;
  onDeleteTodo: (id: string) => void;
};
