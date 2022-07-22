import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";

const Level4Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 4</Text>
    </View>
  );
};
export default Level4Screen;
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
