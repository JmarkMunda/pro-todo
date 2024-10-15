import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SCREEN_WIDTH} from "../../utils/constants";
import {Props} from "./types";
import {showMessage} from "react-native-flash-message";
import Input from "../Input";
import Button from "../Button";
import CloseIcon from "react-native-vector-icons/Ionicons";
import Modal from "../Modal";

const AddEditModal = ({
  isVisible,
  isEditing,
  editingTodo,
  onClose,
  onSubmit,
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(editingTodo?.title ?? "");
    setDescription(editingTodo?.description ?? "");
  }, [editingTodo?.title, editingTodo?.description]);

  const onSubmitPress = () => {
    if (!title || !description) {
      return showMessage({
        type: "danger",
        message: "Please fill in the required fields",
        icon: "danger",
      });
    }
    const id = Math.random().toString(36).slice(2, 9);
    const data = {
      id: isEditing ? editingTodo!.id : id,
      title,
      description,
      createdAt: isEditing ? editingTodo!.createdAt : Date.now().toString(),
    };
    onSubmit(data);
    showMessage({
      type: "success",
      message: `${
        isEditing
          ? "📝 Todo updated successfully!"
          : "🎯 Success! You've just added a new todo!"
      }`,
    });
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!isVisible) return null;

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {isEditing ? "Edit" : "Create"} Todo
          </Text>
          <TouchableOpacity onPress={onClose}>
            <CloseIcon name="close" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <Input
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title"
          />
          <Input
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
          />
        </View>
        <Button text={isEditing ? "Save" : "Add"} onPress={onSubmitPress} />
      </View>
    </Modal>
  );
};

export default AddEditModal;

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
