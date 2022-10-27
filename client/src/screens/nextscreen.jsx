import React, { useState } from "react";

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const NextScreen = ({navigation}) => {
      const [level, setlevel] = useState([
        {name: "1", id: "a", image: require("../assets/level1.png")},
        {name: "2", id: "b", image: require("../assets/level2.png")},
        {name: "3", id: "c", image: require("../assets/level3.png")},
        {name: "4", id: "d", image: require("../assets/level4.png")},
        {name: "5", id: "e", image: require("../assets/level5.png")},
        {name: "6", id: "f", image: require("../assets/level6.png")},
        {name: "7", id: "g", image: require("../assets/level7.png")},
        {name: "8", id: "h", image: require("../assets/level8.png")},
        {name: "9", id: "i", image: require("../assets/level9.png")},
        {name: "10", id: "j", image: require("../assets/level10.png")},
      ]);
  const navigating = ( id ) => {
    switch (id) {
      case "a":
        navigation.navigate("Game");
        break;
      case "b":
        navigation.navigate("level2");
        break;
      case "c":
        navigation.navigate("Thirdgame");
        break;
      case "d":
        navigation.navigate("level4");
        break;
      case "e":
        navigation.navigate("level5");
        break;
      case "f":
        navigation.navigate("level6");
        break;
      case "g":
        navigation.navigate("level7");
        break;
      case "h":
        navigation.navigate("level8");
        break;
      case "i":
        navigation.navigate("level9");
        break;
      case "j":
        navigation.navigate("level10");
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/francee.png")}
      />
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={level}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigating(item.id)}>
              <Image style={styles.image} source={item.image} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  }
const styles = StyleSheet.create({
 
 img: {
    marginTop: "6%",

    borderRadius: 15,
  },

  flatlist: {
    marginTop: "5%",
  },
  image: {
    marginLeft: "7%",
  },

  container: {
    flex: 1,
    //paddingHorizontal: 20,
    alignItems: "center",
  },
});
export default NextScreen;