import React, {useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/constants";
import {Props} from "./types";
import {showMessage} from "react-native-flash-message";
import Input from "../Input";
import Button from "../Button";

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
      message: `${isEditing ? "Changes Saved" : "Added"}`,
      icon: "success",
    });
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!isVisible) return null;

  return (
    <Pressable onPress={onClose} style={styles.container}>
      <View style={styles.content}>
        <Text>{isEditing ? "Update" : "Create"} Todo</Text>
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

        <Button text={isEditing ? "Edit" : "Add"} onPress={onSubmitPress} />
      </View>
    </Pressable>
  );
};

export default AddEditModal;

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
    padding: 16,
    borderRadius: 16,
    width: SCREEN_WIDTH / 1.5,
    gap: 8,
  },
  inputs: {
    gap: 8,
    marginVertical: 16,
  },
});
