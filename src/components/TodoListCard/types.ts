import {TodoListType} from "../../utils/types";

export type Props = {
  item: TodoListType;
  onPress: (id: string, name: string) => void;
};
