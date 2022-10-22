import React from "react";
import { View,Image,Text } from "react-native";
import { StyleSheet } from "react-native";

const WordCard = (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor :'#D9D9D9',
        borderRadius:17,
        justifyContent:'center',
        alignContent:'center',
        width:140,
        height:38,
        margin :'1%'
    },
    text :{
        fontSize:15,
        textAlign:'center',
        fontWeight:'700'
    }
})

export default WordCard;