import React from "react";
import {View,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MusicIcon(){
    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
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
        flex:1,
        width : 60,
        height:60,
        borderRadius:30,
        backgroundColor :'#00B4FB',
        alignItems:'center',
        position:'absolute',
    }
})