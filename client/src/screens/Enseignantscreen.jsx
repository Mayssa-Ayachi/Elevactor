import React from "react";
import {Text, View, Button, StyleSheet} from "react-native";

const EnseignantScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Teachers Login Page</Text>
      <Button
        title="Continue"
      />
    </View>
  );
};
export default EnseignantScreen;
;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",}})