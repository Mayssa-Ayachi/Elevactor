import React from "react" ;
import { View , Image ,Text , StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { 
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic 
  } from '@expo-google-fonts/montserrat' ;

export default function NavBar(){
    let [fontsLoaded,error] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic 
      })
      if (!fontsLoaded){
        return <AppLoading />
    } 
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/languages.png')}  style={styles.image}/>
            <Text style={styles.text}>Langues</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row' , 
        backgroundColor :'#FD5356',
        marginTop : 35,
        padding : 10 ,
        borderBottomRightRadius : 20 ,
        borderBottomLeftRadius : 20 ,
        
    },
    image : {
        height: 97 , 
        width : 97 ,
    } , 
    text :{
        fontSize :40 , 
        fontFamily:'Montserrat_700Bold' , 
        padding : 20 ,
    }
})