import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/constants";
import {Props} from "./types";
import CloseIcon from "react-native-vector-icons/Ionicons";
import Button from "../Button";
import Input from "../Input";
import {showMessage} from "react-native-flash-message";

const AddEditListModal = ({
  isVisible,
  isEditing,
  editingList,
  onClose,
  onSubmit,
}: Props) => {
  const [listTitle, setListTitle] = useState("");

  const onSubmitPress = () => {
    if (!listTitle) {
      return showMessage({
        type: "danger",
        message: "Please fill in the required fields",
        icon: "danger",
      });
    }
    const id = Math.random().toString(36).slice(2, 9);
    onSubmit({id, name: listTitle, todos: []});
    onClose();
    setListTitle("");
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {isEditing ? "Edit" : "Add"} New Todo List
            </Text>
            <TouchableOpacity onPress={onClose}>
              <CloseIcon name="close" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputs}>
            <Input
              value={listTitle}
              onChangeText={setListTitle}
              placeholder="Enter list title"
            />
          </View>

          <Button
            text={isEditing ? "Save" : "Add"}
            onPress={onSubmitPress}
            disabled={!listTitle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddEditListModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0, .5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: 0,
    left: 0,
    zIndex: 99,
  },
  content: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 16,
    width: SCREEN_WIDTH / 1.5,
    gap: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputs: {
    gap: 8,
    marginVertical: 16,
  },
});
