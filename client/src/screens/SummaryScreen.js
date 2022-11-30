import React from 'react';
import { StyleSheet,screenWidth} from 'react-native';
import ParentlangScreen from './parentlang';
import Stats from './Stats';
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigator = createStackNavigator();

export default function SummaryScreen(){

return(
  <StackNavigator.Navigator defaultScreenOptions={{ headerShown: false }}>
    <StackNavigator.Screen
        options={{headerShown: false}}
        name="stats"
        component={Stats}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="parentlang"
        component={ParentlangScreen}
      />
  </StackNavigator.Navigator>)

}

const styles = StyleSheet.create({
   text :{
        marginTop:'40%',
        marginLeft:'38%',
        position:'absolute',
        color:'#352B73',
        fontWeight:'700',
        fontSize:20,
   } ,
  linearGradient : {
    height: '100%',
    width: screenWidth,
  },
  text1 :{
    marginTop:'15%',
        marginLeft:'9%',
        position:'absolute',
        color: "#fff",
            textShadowColor: "rgba(255,255,255,0.8)",
            textShadowOffset: {
              width: 0,
              height: 0,
            },
        textShadowRadius: 10,
        fontWeight:'800',
        fontSize:30,
  } ,
  scroll : {
    marginTop : '5%',
    marginLeft:'6%'
  },
  container: {
    margin :'10%'
    
  }
})