import {TextInputProps} from 'react-native';

export type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
} & TextInputProps;
