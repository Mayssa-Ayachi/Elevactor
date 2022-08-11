import React from "react";
import {Text,View,Button,StyleSheet} from "react-native";


const EleveScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Students Login Page</Text>
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate("Code");
        }}
      />
    </View>
  );
}
export default EleveScreen;
const styles = StyleSheet.create( {
    container: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
    }
});
