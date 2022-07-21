import React from "react";
import {Image,Text,View,StyleSheet,TouchableOpacity,} from "react-native";

const StartScreen = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Imageelevactor}
        source={require("../elevactor10.png")}
      />
      <Text style={styles.Joie}>Joie d'apprendre</Text>
      <View style={styles.all}>
        <View style={styles.contenue}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("Enseignant")}>
              <Text style={styles.item}>
                <Image
                  style={styles.Image1}
                  source={require("../enseignant.jpg")}
                />
                Je suis un enseignant
              </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.contenue}>
          <TouchableOpacity onPress={() => navigation.navigate("Parent")}>
              <Text style={styles.item}>
                <Image
                  style={styles.Image1}
                  source={require("../parent.png")}
                />
                Je suis un parent
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenue}>
          <TouchableOpacity onPress={() => navigation.navigate("Eleve")}>
            <Text style={styles.item}>
              <Image style={styles.Image1} source={require("../eleve.jpg")} />
              Je suis un élève
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default StartScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  Imageelevactor: {
    marginTop: 30,
    width: 180,
    height: 180,
  },
  Joie: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 18,
    letterSpacing: 2,
    fontFamily: "",
  },
  Image1: {
    width: 80,
    height: 90,
  },
  item: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderColor: "#9b51b4",
    borderWidth: 3.5,
    fontSize: 20,
    fontWeight: "bold",
    //marginTop: 10,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contenue: {
    marginTop: 12,
  },
});