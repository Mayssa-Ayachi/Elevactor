import React from 'react';
import {View,StyleSheet} from 'react-native';
import ThemeComponent from '../components/ThemeComponent';

function ThemeScreenfr(props)
{
    return (
        <View style={styles.container} >
        <ThemeComponent source={require("../assets/languages.png")} color={"#6AF8BE"} borderColor={"#00D27D"} text={"Langue"} />
        <ThemeComponent source={require("../assets/mental.png")} color={"#D7D5F7"} borderColor={"#8490FF"} text={"Developpemenet"} />
        <ThemeComponent source={require("../assets/science.png")} color={"#FDCCCC"} borderColor={"#FF84A1"} text={"Science"} />
        <ThemeComponent source={require("../assets/creativity.png")} color={"#F6EDC8"} borderColor={"#FFFA84"} text={"Art"} />
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
  

export default ThemeScreenfr;