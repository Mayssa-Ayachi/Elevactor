import React from 'react';
import {Text,TouchableOpacity,Image,View,StyleSheet} from 'react-native';

function ThemeComponent({navigation,color,borderColor,source,text,fr})
{
    return (
        <View style={{...styles.top,backgroundColor: color, borderColor: borderColor }}>
    <TouchableOpacity onPress={()=>(fr===true) ?navigation.navigate("SubTheme"):console.log("failed")} >
            <View style={{alignItems:"center",resizeMode:"cover"}} >
        <Image source={source} style={styles.pic} />
        <Text style={styles.text}>{text}</Text>
            </View>
          </TouchableOpacity>
          </View>)       
}

const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        fontSize:20,
    },
    pic:{
        resizeMode:"cover",height:72,width:72,
        alignItems:'center',
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
    top: {
      flex: 0.24,
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent:'center',
    }

  });

export default ThemeComponent;