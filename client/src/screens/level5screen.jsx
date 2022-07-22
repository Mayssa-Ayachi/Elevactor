import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Level5Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Level 5</Text>
    </View>
  );
};
export default Level5Screen;
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
