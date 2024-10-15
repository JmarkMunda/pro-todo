import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {showMessage} from "react-native-flash-message";
import {SCREEN_WIDTH} from "../../utils/constants";
import {Props} from "./types";
import CloseIcon from "react-native-vector-icons/Ionicons";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import {useTodosStore} from "../../stores/store";

const AddEditListModal = ({
  isVisible,
  isEditing,
  editingList,
  onClose,
}: Props) => {
  const {addTodoList, editTodoList} = useTodosStore();
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    setListTitle(editingList?.name ?? "");
  }, [editingList?.name]);

  const onSubmitPress = () => {
    if (!listTitle) {
      return showMessage({
        type: "danger",
        message: "Please fill in the required fields",
        icon: "danger",
      });
    }
    const id = Math.random().toString(36).slice(2, 9);
    const data = {
      id: isEditing ? editingList!.id : id,
      name: listTitle,
      todos: isEditing ? editingList!.todos : [],
    };
    isEditing ? editTodoList(editingList!.id, data) : addTodoList(data);
    onClose();
    setListTitle("");
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
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
    </Modal>
  );
};

export default AddEditListModal;

const styles = StyleSheet.create({
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
