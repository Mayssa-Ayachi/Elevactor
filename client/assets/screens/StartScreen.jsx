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
              style={styles.toucheable}
              onPress={() => navigation.navigate("Enseignant")}>
                <Image
                  style={styles.Image1}
                  source={require("../enseignant.jpg")}
                />
              <Text style={styles.item}>
                
                Je suis un enseignant
              </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.contenue}>
          <TouchableOpacity style={styles.toucheable}  onPress={() => navigation.navigate("Parent")}>
                <Image
                  style={styles.Image1}
                  source={require("../parent.png")}
                />
              <Text style={styles.item}>
                
                Je suis un parent
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenue}>
          <TouchableOpacity style={styles.toucheable} onPress={() => navigation.navigate("Eleve")}>
          <Image style={styles.Image1} source={require("../eleve.jpg")} />
            <Text style={styles.item}>
              
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
    marginHorizontal:10,
    marginVertical:3
  },
  toucheable:{
    borderColor: "#9b51b4",
    borderWidth: 3.5,
    borderRadius: 20,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },
  item: {
    paddingVertical:30,
    
    paddingHorizontal:35,

    fontSize: 20,
    fontWeight: "bold",
  },
  contenue: {
    marginTop: 12,
    
  },
});