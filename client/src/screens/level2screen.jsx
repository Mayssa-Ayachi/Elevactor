import React from "react";
import {Text, View,StyleSheet} from "react-native";

const Level2Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 2</Text>
    </View>
  );
};
export default Level2Screen;
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