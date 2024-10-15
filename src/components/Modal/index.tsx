import {StyleSheet, Modal as RNModal, View} from "react-native";
import React from "react";
import {Props} from "./types";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/constants";

const Modal = ({isVisible, onClose, children, ...props}: Props) => {
  return (
    <RNModal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      {...props}>
      <View style={styles.container}>{children}</View>
    </RNModal>
  );
};

export default Modal;

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
});
