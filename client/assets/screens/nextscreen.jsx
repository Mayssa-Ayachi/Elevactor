import React, { useState } from "react";

import { Text, View, FlatList, TouchableOpacity,StyleSheet,Image,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const NextScreen = ({navigation}) => {
      const [level, setlevel] = useState([
        {name: "1", id: "a"},
        {name: "2", id: "b" } ,
        {name: "3", id: "c"},
        {name: "4", id: "d" },
        {name: "5", id: "e" },
        {name: "6", id: "f"},
        {name: "7", id: "g"},
        {name: "8", id: "h"},
        {name: "9", id: "i"},
        {name: "10", id: "j",},

      ]);
  const navigating = (id) => {
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require("../france.png")} />
      </View>
      <View style={styles.list}>
        <FlatList
          numColumns={2}
          style={styles.touchable}
          keyExtractor={(item) => item.id}
          data={level}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigating( item.id )}>
                
                  <Text style={styles.items}>{item.name}</Text>
                  
                </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
  }
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "20%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    marginTop: "2%",
    //padding: "7%",

    //marginRight:0,
  },
  list: {
    /* display: "flex",
    flexDirection: "column",*/
    justifyContent: "space-between",
    marginTop: "7%",
    alignItems: "center",
  },

  touchable: {
    //width: "50%",
    marginTop: "0%",
  },
  items: {
    //marginTop: 24,
    width: 200,
    height: 200,
    backgroundColor: "red",
    fontSize: 25,
    borderWidth: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    //paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    //justifyContent: 'center',
  },
});
export default NextScreen;