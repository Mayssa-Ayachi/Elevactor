import React from 'react';
import {View,StyleSheet} from 'react-native';
import ThemeComponent from '../components/ThemeComponent';

function ThemeScreen(props)
{
    return (
        <View style={styles.container} >
        <ThemeComponent source={require("../assets/languages.png")} color={"#6AF8BE"} borderColor={"#00D27D"} text={props.navigation.getParam('pre',"")} fr={props.navigation.getParam('fr',"")} link={"SubTheme"} navigation={props.navigation}  />
        <ThemeComponent source={require("../assets/mental.png")} color={"#D7D5F7"} borderColor={"#8490FF"} text={props.navigation.getParam('deu',"")} />
        <ThemeComponent source={require("../assets/science.png")} color={"#FDCCCC"} borderColor={"#FF84A1"} text={props.navigation.getParam('troi',"")} />
        <ThemeComponent source={require("../assets/creativity.png")} color={"#F6EDC8"} borderColor={"#FFFA84"} text={props.navigation.getParam('qua',"")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#E7E6F8",
      padding: 20,
      margin: 10,
    },
  });
  

export default ThemeScreen;