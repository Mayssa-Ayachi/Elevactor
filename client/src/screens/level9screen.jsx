import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Level9Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 9</Text>
    </View>
  );
};
export default Level9Screen;
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
