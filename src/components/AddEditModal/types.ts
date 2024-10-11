import {TodoType} from "../../utils/types";

export type Props = {
  isVisible: boolean;
  isEditing: boolean;
  editingTodo: TodoType | null;
  onClose: () => void;
  onSubmit: (data: TodoType) => void;
};
