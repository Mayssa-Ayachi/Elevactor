import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Context } from "../context/AuthenticationContext";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import TextIconInput from "../components/TextIconInput";

const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin } = useContext(Context);
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/loginLogo.png")} />

      <Text h2 style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}>
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

      <TouchableOpacity>
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
        onPress={() =>
          () => navigation.navigate("StartScreen")
/*signin({ user, password }, () => navigation.navigate("StartScreen"))*/
        }
      />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.underlinedText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    bottom: 10,
  },
  underlinedText: {
    alignSelf: "center",
    fontSize: 17,
    borderBottomColor: "#001AFF",
    borderBottomWidth: 1,
  },
});

export default SignInScreen;
