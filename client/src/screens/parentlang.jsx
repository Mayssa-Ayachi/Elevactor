import React from "react";
import {Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Parentnav from "../components/parentnav";

const ParentlangScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../../assets/backparent.png")}
        resizeMode="cover">
        <View style={styles.total}>
          <View style={styles.all1}>
            <View>
              <Text style={styles.textlang}>PARENT</Text>
            </View>
            <View style={styles.fleche}>
              <TouchableOpacity>
                <Image source={require("../assets/parentflech.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.allar}>
            <View>
              <TouchableOpacity>
                <Text style={styles.textlang}>Arabe</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.arabic}>
              <TouchableOpacity>
                <Image source={require("../assets/arb.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.allfr}>
            <View style={styles.imgfr}>
              <TouchableOpacity>
                <Image source={require("../assets/frimg.png")}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.textlang}>Français</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Parentnav />
        </View>
      </ImageBackground>
    </View>
  );
};
export default ParentlangScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 35,
    letterSpacing: 3,
    fontWeight: "bold",
    color: "white",
  },
  fleche: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  /*all: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    margin: "5%",
  },*/
  allar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    //marginBottom: "10%",
    padding: "2%",
  },
  allfr: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    //marginBottom: "10%",
    padding: "2%",
    marginBottom: "10%",
  },
  all1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom:"5%"
  },
  total: {
    flex: 1,
    flexDirection: "column",
  },
  textlang: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    marginBottom:"10%",
  }
  /*arabic: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 15,
    marginTop: "15%",
  },
  artext: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },*/
});
