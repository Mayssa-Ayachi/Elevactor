import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import TextIconInput from "../components/TextIconInput";
import { ScrollView } from "react-native-gesture-handler";
import { Context as AuthContext } from "../context/AuthenticationContext";

const SignUpScreen = (props) => {
  const { state, signup } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={styles.logo} source={require("../assets/loginLogo.png")} />

      <Text h2 style={{ alignSelf: "center", marginTop: 20, marginBottom: 40 }}>
        Créer un compte
      </Text>

      <TextIconInput
        icon="user"
        label="Nom d'utilisateur : "
        onChange={setUser}
      />
      <TextIconInput icon="phone" label=" Téléphone : " onChange={setPhone} />
      <TextIconInput icon="map-pin" label=" Adresse : " onChange={setAdress} />
      <TextIconInput icon="mail" label=" Adresse email : " onChange={setMail} />

      <TextIconInput
        icon="lock"
        label=" Mot de passe : "
        onChange={setPassword}
        password
      />

      <Button
        title="Créer votre compte"
        buttonStyle={{
          borderRadius: 40,
        }}
        containerStyle={{
          marginHorizontal: 50,
          marginVertical: 40,
        }}
        icon={
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 110 }}
          />
        }
        iconPosition="right"
        onPress={() => {
          signup({ user, password });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 250,
    height: 250,
    bottom: 10,
  },
});

export default SignUpScreen;
