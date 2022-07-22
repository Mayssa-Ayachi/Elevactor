import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Level8Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 8</Text>
    </View>
  );
};
export default Level8Screen;
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
