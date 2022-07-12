import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Text, Button } from "react-native-elements";
import TextIconInput from "../components/TextIconInput";
const HomeScreen = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/loginLogo.png")} />

      <Text h2 style={{ left: 20 }}>
        Connexion
      </Text>
      <TextIconInput
        icon="user"
        label=" Nom d'utilisateur : "
        onChange={setUser}
      />
      <TextIconInput
        icon="lock"
        label=" Mot de passe : "
        onChange={setPassword}
        password
      />
      <Button
        title="Connecter"
        containerStyle={{
          marginHorizontal: 50,
          marginVertical: 10,
          borderRadius: 50,
        }}
        onPress={() => {
          console.log("the state is ", user);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    bottom: 10,
  },
  button: {
    color: "black",
  },
});

export default HomeScreen;
