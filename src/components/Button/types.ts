import {StyleProp, ViewStyle, TouchableOpacityProps} from "react-native";

export type Props = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;
