import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useTodosStore} from "../../stores/store";
import Button from "../../components/Button";
import TodoListCard from "../../components/TodoListCard";
import AddEditListModal from "../../components/AddEditListModal";
import ActionSheet from "react-native-actions-sheet";
import DeleteIcon from "react-native-vector-icons/Ionicons";
import useDashBoard from "../../hooks/useDashboard";

const DashboardScreen = () => {
  const {todoList} = useTodosStore();
  const {
    actionSheetRef,
    actions,
    showModal,
    editingList,
    onOpenModal,
    onCloseModal,
    onSheetOpen,
    onSheetClose,
    onNavigateTodo,
  } = useDashBoard();

  return (
    <View style={styles.container}>
      {/* BUTTON */}
      <Button text="Add new list" onPress={onOpenModal} />

      {/* LIST */}
      <FlatList
        data={todoList}
        numColumns={2}
        renderItem={({item}) => (
          <TodoListCard
            item={item}
            onPress={onNavigateTodo}
            onActionPress={onSheetOpen}
          />
        )}
        style={styles.todoListContainer}
      />

      {/* MODAL FOR ADDING NEW LIST  */}
      <AddEditListModal
        isVisible={showModal}
        isEditing={Object.keys(editingList || {}).length > 0}
        editingList={editingList}
        onClose={onCloseModal}
      />

      {/* ACTION SHEET */}
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.sheet}
        onTouchBackdrop={onSheetClose}
        onNavigateBack={onSheetClose}>
        {actions.map(action => (
          <TouchableOpacity
            key={action.key}
            onPress={action.onPress}
            style={styles.sheetItem}>
            <DeleteIcon name={action.icon} size={20} />
            <Text>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </ActionSheet>
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
  sheet: {
    padding: 24,
  },
  sheetItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingVertical: 16,
  },
});
