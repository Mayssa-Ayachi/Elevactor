import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const WordCard = ({label,newColor})=>{
    return(
        <TouchableOpacity style={{...styles.containerr,backgroundColor:newColor}}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerr : {
        marginTop:'2%',
        borderRadius:17,
        width:'40%',
        height:'25%',
    },
    text :{
        fontSize:15,
        textAlign:'center',
        fontWeight:'700',
        marginTop:'1%'
    }
})

export default WordCard;