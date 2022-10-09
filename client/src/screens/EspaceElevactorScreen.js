import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

const EspaceElevactorScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/loginLogo.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};
export default EspaceElevactorScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
