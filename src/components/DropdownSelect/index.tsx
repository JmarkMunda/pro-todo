import React from "react";
import {View, StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Props} from "./types";

const DropdownSelect = ({items, selectedItem, onChangeItem}: Props) => {
  return (
    <View style={styles.container}>
      <Picker
        mode="dialog"
        selectedValue={selectedItem}
        style={styles.picker}
        onValueChange={onChangeItem}>
        {items.map(({label, value}) => (
          <Picker.Item key={label} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  picker: {
    backgroundColor: "#ffff",
  },
});

export default DropdownSelect;
