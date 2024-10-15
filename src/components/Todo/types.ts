import {TodoType} from "../../utils/types";

export type Props = {
  item: TodoType;
  onEditTodo: (newData: TodoType) => void;
  onDeleteTodo: (id: string) => void;
};
