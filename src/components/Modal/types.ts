import {ModalProps} from "react-native";

export type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & ModalProps;
