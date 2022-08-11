import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import Checkgamecontent4 from "../components/checkgamecontent4";

const CheckGame4= () => {
  return (
    <View style={styles.all}>
      <View style={styles.container1}>
        <Image source={require("../assets/icon-fr.png")} />
        <View style={styles.container2}>
          <Image
            style={{marginRight: 15, marginTop: 20}}
            source={require("../assets/musical-notes.png")}
          />
          <Image
            style={{marginRight: 15, marginTop: 20}}
            source={require("../assets/home.png")}
          />
        </View>
      </View>
      <Checkgamecontent4/>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  all: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default CheckGame4;
