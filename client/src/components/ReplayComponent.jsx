import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Button} from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTransition } from 'react';
const {width, height} = Dimensions.get('screen');


function ReplayComponent({navigation})
{
    return (    
            <View style={styles.view}>
        <Image style={styles.img}source={require("../assets/replay.png")} />
        <Text style={styles.text}>Tu peux 
            le faire mon héro !</Text>
        <TouchableOpacity style={{width:"50%",height:"20%"}}>
        <LinearGradient
        colors={['#5E77FF', '#3DDBFE']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}} style={styles.button}> 
        
    <Text style={styles.textbutton}>Réessayer</Text>
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
    fontWeight:"bold",
  marginTop: '10%',
  textAlign: 'center'
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
  img:{
    marginTop:"20%"
  }
});
 
export default ReplayComponent;