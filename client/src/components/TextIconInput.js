import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TextIconInput = ({ label, icon, onChange, password }) => {
  const [show, setShow] = useState(false);
  const passwordIcon = show ? "eye-slash" : "eye";
  return (
    <View>
      <View style={styles.iconTextContainer}>
        <EvilIcons name={icon} size={30} color="black" />
        <Text style={styles.iconText}>{label}</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <TextInput
          secureTextEntry={password && !show}
          style={styles.input}
          onChangeText={onChange}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {password && (
          <TouchableOpacity
            onPress={() => {
              show ? setShow(false) : setShow(true);
            }}
          >
            <FontAwesome
              name={passwordIcon}
              size={26}
              style={styles.showIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconTextContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  input: {
    borderColor: "#001AFF",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    height: 40,
    fontSize: 18,
    width: 300,
  },
  showIcon: {
    top: 5,
    right: 30,
  },
});
export default TextIconInput;
