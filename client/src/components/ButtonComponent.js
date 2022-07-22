import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function ButtonComponent(props) {

    return (
        <TouchableOpacity style={props.styles.button} onPress={props.press} >
            <Text style={props.styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent;