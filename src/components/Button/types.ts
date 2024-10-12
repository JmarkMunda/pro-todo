import {StyleProp, ViewStyle, TouchableOpacityProps} from "react-native";

export type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;
