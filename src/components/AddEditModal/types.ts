import {TodoType} from "../../utils/types";

export type Props = {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (data: TodoType) => void;
};
