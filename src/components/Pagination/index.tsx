import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Button from "../Button";
import {Props} from "./types";

const Pagination = ({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        text="Previous"
        onPress={handlePrevious}
        disabled={currentPage === 1}
      />
      <Text style={styles.pageText}>
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        text="Next"
        onPress={handleNext}
        disabled={currentPage === totalPages}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  pageText: {
    fontSize: 16,
  },
});
