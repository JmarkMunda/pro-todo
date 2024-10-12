import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Props} from "./types";

const Empty = ({text, description, image, style, imageStyle}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {image && <Image source={image!} style={[styles.image, imageStyle]} />}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#ababab",
  },
  image: {
    width: 150,
    height: 150,
  },
});
