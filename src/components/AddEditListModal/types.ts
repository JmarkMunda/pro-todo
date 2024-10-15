import {TodoListType} from "../../utils/types";

export type Props = {
  isVisible: boolean;
  isEditing: boolean;
  editingList: TodoListType | null;
  onClose: () => void;
};
