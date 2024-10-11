import {StyleSheet, TextInput} from "react-native";
import React from "react";
import {Props} from "./types";

const Input = ({value, onChangeText, placeholder, ...props}: Props) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
