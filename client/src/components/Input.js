import React from "react";
import {Text,TextInput,View,StyleSheet,Alert} from "react-native";
import CustomButton from "./CustomButton";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { 
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black 
  } from '@expo-google-fonts/tajawal'

export default function Input(props){
    const [code , setCode] = React.useState(null);
    
    let [fontsLoaded,error] = useFonts({
        Tajawal_200ExtraLight,
        Tajawal_300Light,
        Tajawal_400Regular,
        Tajawal_500Medium,
        Tajawal_700Bold,
        Tajawal_800ExtraBold,
        Tajawal_900Black 
        })
        if (!fontsLoaded){
            return <AppLoading />
        } 
    return (
        <View style={styles.container}>
        <Text style={styles.text}> Demandez le code à votre parent </Text>
        <TextInput 
            style={styles.input}
            placeholder="Saisi ton code d’élève"
            keyboardType="numeric"
            maxLength={4}
            value ={code}
            onChangeText={setCode}
            
        />
        <CustomButton 
            valeur = {code}
            navigation={props.navigation}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        position:'absolute',
        marginTop:'80%',
        marginLeft:'20%'
        
    },
    input :{
        borderRadius:  29.5,
        borderColor:"#00B4FB" ,
        width:'130%',
        borderWidth:1,
        paddingLeft:'5%',
        paddingTop:'3%',
        paddingBottom:'3%',
        margin:'5%',

    },
    text :{
        textAlign:'center',
        fontSize:19,
        fontFamily:'Tajawal_500Medium'
    }
})