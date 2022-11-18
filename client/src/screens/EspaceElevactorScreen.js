import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import Parentnav from "../components/parentnav";

const images = [
  require(`../assets/Avatar1.png`),
  require(`../assets/Avatar2.png`),
  require(`../assets/Avatar3.png`),
  require(`../assets/Avatar4.png`),
];
const EspaceElevactorScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/espaceElevactor.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <TouchableOpacity
          style={styles.nav}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={50}
            color="#614AD3"
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            source={require("../../assets/elevactor10.png")}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Text style={styles.headerText}>Espace Elevactor</Text>
        </View>
        <Chat navigation={props.navigation} name="Si Foulen" photoNumber={0} />
        <Chat
          navigation={props.navigation}
          name="Folen el Folen"
          photoNumber={1}
        />
        <Chat
          navigation={props.navigation}
          name="Folena el Folena"
          photoNumber={2}
        />
        <Chat
          navigation={props.navigation}
          name="Folen el Foulen"
          photoNumber={3}
        />
      </ImageBackground>
    </View>
  );
};
export default EspaceElevactorScreen;
const Chat = ({ name, photoNumber, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: "10%",
        padding: 10,
        borderBottomColor: "white",
        borderBottomWidth: 1,
      }}
      onPress={() => {
        navigation.navigate("ChatScreen");
      }}
    >
      <Image
        source={images[photoNumber]}
        resizeMode="contain"
        style={styles.avatar}
      />
      <View>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: "white" }}>
          So , what's your plan this weekend ?
        </Text>
      </View>
      <Text style={{ color: "white", marginLeft: "auto" }}>15:41</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    top: 20,
    right: 10,
  },
  background: {
    flex: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },

  header: {
    marginTop: 50,
    height: "10%",
    backgroundColor: "#5E77FF",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 26,
  },
});
