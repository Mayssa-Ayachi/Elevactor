import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTransition } from 'react';
const {width, height} = Dimensions.get('screen');


function WinnComponent(props )
{
    return (    
            <View style={styles.view}>
        <Image source={require("../assets/water.png")} />
        <Text style={styles.text}>Bravo mon Héro</Text>
        <TouchableOpacity style={{width:"50%",height:"20%"}} onPress={()=>{props.navigation.navigate("Next")}}>
        <LinearGradient
        colors={['#5E77FF', '#3DDBFE']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}} style={styles.button}>
            <Text style={styles.textbutton}>Continue</Text>
        </LinearGradient>
        </TouchableOpacity>
            </View>)

}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    flex:0.5,
    top: height / 4,
    width: (width * 3) / 4,
    height: height / 2,
    position: "absolute",
    alignSelf: "center",
    borderColor: "black",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 10,
        opacity: 0.9,
    zIndex:1,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    borderRadius: 20,
    marginTop: "5%",
    justifyContent: "center",
  },
  textbutton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    paddingVertical: "5%",
  },
});
 
export default WinnComponent;