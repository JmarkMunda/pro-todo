import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {Props} from "./types";

const Button = ({text, onPress, style, ...props}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#c1cbf5",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
