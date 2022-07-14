import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import TextIconInput from "../components/TextIconInput";
const HomeScreen = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/loginLogo.png")} />

      <Text h2 style={{ left: 20, marginTop: 20, marginBottom: 40 }}>
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

      <TouchableOpacity style={styles.center}>
        <Text style={{ alignSelf: "flex-end", margin: 7, fontSize: 15 }}>
          Mot de passe oublié ?
        </Text>
      </TouchableOpacity>

      <Button
        title="Connecter"
        buttonStyle={{
          borderRadius: 40,
        }}
        containerStyle={{
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        icon={
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 130 }}
          />
        }
        iconPosition="right"
        onPress={() => {
          console.log("the state is ", user);
        }}
      />

      <TouchableOpacity style={styles.center}>
        <Text style={styles.underlinedText}>Créer un compte</Text>
      </TouchableOpacity>
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
  underlinedText: {
    alignSelf: "center",
    fontSize: 17,
    borderBottomColor: "#001AFF",
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
