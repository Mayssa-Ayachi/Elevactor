import React from "react";
import {Text, View, Button, StyleSheet,ImageBackground,Image,TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ChatScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.both}>
        <Text style={styles.title}> ESPACE ELEVACTOR</Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image source={require("../assets/backimg.png")}></Image>
        </TouchableOpacity>
      </View>
      <ImageBackground
        resizeMode="stretch"
        style={styles.img}
        source={require("../assets/bckgroundchat.png")}></ImageBackground>
    </View>
  );
};
export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A364BD",
  },
  img: {
    width: "100%",
    height: "94%",
    marginTop:"21%",
  },
  title: {
    flex: 1,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    zIndex: 10,
  },
  both: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    position: "absolute",
    paddingTop: "9%",
  },
});
