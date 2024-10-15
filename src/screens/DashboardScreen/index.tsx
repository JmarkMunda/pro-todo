import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Props} from "./types";
import {useTodosStore} from "../../stores/store";
import Button from "../../components/Button";
import TodoListCard from "../../components/TodoListCard";
import AddEditListModal from "../../components/AddEditListModal";

const DashboardScreen = ({navigation}: Props) => {
  const {todoList, addTodoList} = useTodosStore();
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const onCardPress = (id: string, name: string) => {
    navigation.navigate("Todo List", {id, name});
  };

  return (
    <View style={styles.container}>
      {/* BUTTON */}
      <Button text="Add new list" onPress={onOpenModal} />

      {/* LIST */}
      <FlatList
        data={todoList}
        numColumns={2}
        renderItem={({item}) => (
          <TodoListCard item={item} onPress={onCardPress} />
        )}
        style={styles.todoListContainer}
      />

      {/* MODAL FOR ADDING NEW LIST  */}
      <AddEditListModal
        isVisible={showModal}
        isEditing={false}
        editingList={null}
        onClose={onCloseModal}
        onSubmit={addTodoList}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  todoListContainer: {
    marginVertical: 16,
  },
});
