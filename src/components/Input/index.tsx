import {StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import {Props} from "./types";

const Input = ({value, onChangeText, placeholder, ...props}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[styles.input, isFocused && styles.focused]}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  focused: {
    borderColor: "#c1cbf5",
  },
});
