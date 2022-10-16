import React from "react";
import {Text, View, Button, StyleSheet,ImageBackground,Image} from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      
        <ImageBackground
          style={styles.img}
          source={require("../assets/chat.png")}
          resizeMode="cover"></ImageBackground>

      <View style={styles.image}>
        <Image source={require("../assets/elevactor.png")}></Image>
      </View>
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
  image: {
    flex: 1,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
