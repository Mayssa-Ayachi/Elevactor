import React from "react";
import {View,StyleSheet,Text} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

function LetterComponent()
{
    return (
        <View >
                        <Text style={styles.text} >T</Text> 
        </View>
    )
}
const styles=StyleSheet.create({
    grid:{
        borderColor:'black',
        width:100,
        height:100
    },
    text:{
        color:'red',
        fontSize:30,
    },
})
export default LetterComponent;