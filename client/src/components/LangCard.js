import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text , StyleSheet,Image} from 'react-native';
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
import { TouchableOpacity } from 'react-native';


export default function LangCard(props){

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
    return (
        <TouchableOpacity style={[
            styles.item , 
            props.color,
            props.border
            ]}
            onPress = {()=>{}}
            >
            <Image source={props.image}
                    style = {styles.image}
            />
            <Text style ={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        padding: '5%',
        marginVertical: '4%',
        marginHorizontal: '4%',
        width : '90%' , 
        height : 230 ,
        borderRadius : 20,
        alignItems:'center' ,
        borderWidth : 5 ,
        
    } ,
    text : {
        textAlign:'center',
        fontFamily:'Montserrat_800ExtraBold',
        fontSize:30,
    } , 
    image :{
        width : '65%' ,
        height:'85%' , 
    }
})
