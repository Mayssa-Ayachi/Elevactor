import React from 'react';
import {View, Image,StyleSheet,Text} from 'react-native';
import MusicIcon from './MusicIcon';
import { 
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black 
  } from '@expo-google-fonts/tajawal'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function Head(){
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
        <View>
            <MusicIcon />
            <Image 
            style={styles.image}
            source={require('../../assets/logoText.png')} />
            <Text style={styles.text}>Entrez votre code pour vous
                inscrire ou vous connecter</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image :{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginTop:'20%',   
        fontSize:25, 
        fontFamily:'Tajawal_700Bold'
    },

})