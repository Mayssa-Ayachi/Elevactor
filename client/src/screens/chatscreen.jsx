import React from "react";
import {Text, View, Button, StyleSheet,ImageBackground,Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../assets/bckgroundchat.png")}
        resizeMode="cover"></ImageBackground>
    </View>
  );
};
export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
