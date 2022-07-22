import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";
const ParentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Parents Login Page</Text>
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate("Loading");
        }}
      />
    </View>
  );
};
export default ParentScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
