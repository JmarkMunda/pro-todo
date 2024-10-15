import {useRef, useState} from "react";
import {ActionSheetRef} from "react-native-actions-sheet";
import {TodoListType} from "../utils/types";
import {useTodosStore} from "../stores/store";
import {useNavigation} from "@react-navigation/native";
import {Navigation} from "../screens/DashboardScreen/types";

const useDashBoard = () => {
  const navigation = useNavigation<Navigation>();
  const {deleteTodoList} = useTodosStore();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingList, setEditingList] = useState<TodoListType | null>(null);

  const onOpenModal = () => setShowModal(true);
  const onCloseModal = () => {
    setShowModal(false);
    setEditingList(null);
  };

  const onSheetOpen = (data: TodoListType) => {
    actionSheetRef.current?.show();
    setEditingList(data);
  };
  const onSheetClose = () => {
    actionSheetRef.current?.hide();
    setEditingList(null);
  };

  const onNavigateTodo = (id: string, name: string) => {
    navigation.navigate("Todo List", {id, name});
  };

  const onManageListPress = () => {
    if (!editingList) return;
    const {id, name} = editingList;
    onNavigateTodo(id, name);
    onSheetClose();
  };

  const onEditListPress = () => {
    actionSheetRef.current?.hide();
    onOpenModal();
  };
  const onDeleteListPress = () => {
    onSheetClose();
    deleteTodoList(editingList!.id);
  };

  const actions = [
    {
      key: "manage",
      name: "Manage",
      icon: "list",
      onPress: onManageListPress,
    },
    {
      key: "edit",
      name: "Edit",
      icon: "folder-open-outline",
      onPress: onEditListPress,
    },
    {
      key: "delete",
      name: "Delete",
      icon: "remove-circle-outline",
      onPress: onDeleteListPress,
    },
  ];

  return {
    actionSheetRef,
    actions,
    showModal,
    editingList,
    onOpenModal,
    onCloseModal,
    onSheetOpen,
    onSheetClose,
    onNavigateTodo,
  };
};

export default useDashBoard;
