import {StyleSheet, Text, View} from "react-native";
import {OFFSET, SCREEN_WIDTH} from "../../utils/constants";
import React, {useState} from "react";
import TodoList from "../../components/TodoList";
import AddEditModal from "../../components/AddEditModal";
import Button from "../../components/Button";
import useTodo from "../../hooks/useTodo";
import SearchBar from "../../components/Searchbar";
import useSearch from "../../hooks/useSearch";
import DropdownSelect from "../../components/DropdownSelect";
import useDropdown from "../../hooks/useDropdown";
import Pagination from "../../components/Pagination";

const TodoListScreen = () => {
  const {searchValue, onSearchChange} = useSearch();

  const {dropdownItems, selectedDropdown, onDropdownChange} = useDropdown();

  const [currentPage, setCurrentPage] = useState(1);

  const {
    todos,
    totalTodos,
    editingTodo,
    showModal,
    openEditModal,
    openModal,
    closeModal,
    onDeleteTodo,
    onSubmit,
  } = useTodo(searchValue, selectedDropdown, currentPage);

  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />

      <View style={styles.dropdown}>
        <DropdownSelect
          items={dropdownItems}
          selectedItem={selectedDropdown}
          onChangeItem={onDropdownChange}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todos</Text>
        <Button text="+ New" onPress={openModal} />
      </View>

      <TodoList
        data={todos}
        onEditTodo={openEditModal}
        onDeleteTodo={onDeleteTodo}
      />

      {!!totalTodos && (
        <Pagination
          currentPage={currentPage}
          totalItems={totalTodos}
          pageSize={OFFSET}
          onPageChange={setCurrentPage}
        />
      )}

      <AddEditModal
        isVisible={showModal}
        isEditing={Object.keys(editingTodo || {}).length > 0}
        editingTodo={editingTodo}
        onClose={closeModal}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  dropdown: {
    width: SCREEN_WIDTH / 3,
    alignSelf: "flex-end",
    marginVertical: 8,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
