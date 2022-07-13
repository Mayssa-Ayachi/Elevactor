import React from "react";
import {View,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MusicIcon(){
    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress = {prevState => {setMusic(!prevState)}}
            >
            <FontAwesome5 
                    name={'music'} 
                    color={'#fff'}
                    size={20}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button :{
        width : 40,
        height:40,
        borderRadius:30,
        backgroundColor :'#00B4FB',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        left:'85%',
        top: '-75%',
        
    }
})