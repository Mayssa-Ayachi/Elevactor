import React from "react";
import {View, StyleSheet,TouchableOpacity,Image} from "react-native";

const Parentnav = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../assets/tof1.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/tf2.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={
          () => props.navigation.navigate("EspaceElevactor")
        }>
        <Image source={require("../assets/tof3.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/tof4.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default Parentnav;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
        justifyContent: "space-around",
    padding:"10%"
  },
});
