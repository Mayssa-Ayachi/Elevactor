import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";

const Checkgamecontent5 = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Image source={require("../assets/progresbar1.png")} />
        </View>

        <View style={styles.life}>
          <Image source={require("../assets/love-02.png")} />
          <Text style={{color: "#FF5E43", fontWeight: "bold", fontSize: 27}}>
            5
          </Text>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Image source={require("../assets/bleurectangle.png")} />
        <View style={styles.theme}>
          <Text style={{fontWeight: "bold", fontSize: 23, color: "white"}}>
            où est la pastèque ?
          </Text>
        </View>
      </View>

      <View style={styles.allchoices}>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.choice}>
            <Image source={require("../assets/boy.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Image source={require("../assets/father.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.choice}>
            <Image source={require("../assets/watemelon.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Image source={require("../assets/castle.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lampe}>
        <Image source={require("../assets/lampenonalumée.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10%",
  },
  life: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectangle: {
    marginTop: "6%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  theme: {
    position: "absolute",
  },
  allchoices: {
    marginTop: "10%",
  },
  choices: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  choice: {
    margin: "5%",
  },
  lampe: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default Checkgamecontent5;
