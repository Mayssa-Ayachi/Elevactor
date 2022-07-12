import React from "react";
import { Text , StyleSheet, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    DaysOne_400Regular 
  } from '@expo-google-fonts/days-one';

  import { useFonts } from 'expo-font';
  import AppLoading from 'expo-app-loading';

export default function CustomButton(){

    let [fontsLoaded,error] = useFonts({
        DaysOne_400Regular
    })
    if (!fontsLoaded){
        return <AppLoading />
    }
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
        >
            <Text style={styles.text}>Vérifier le code</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button :{
        width : 207,
        height: 52,
        borderRadius: 26,
        backgroundColor :'#00B4FB',
        elevation:5,
    },
    
    text :{
        color :'#fff',
        fontSize: 20,
        textAlign:'center',
        padding:10,
        fontFamily:'DaysOne_400Regular'
    },
    buttonContainer : {
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        marginTop:'5%'
    }
})