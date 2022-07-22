import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";

const Level1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 1</Text>
    </View>
  );
};
export default Level1Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});