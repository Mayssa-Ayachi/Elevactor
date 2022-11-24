import React from 'react';
import {View,StyleSheet} from 'react-native';
import ThemeComponent from '../components/ThemeComponent';

function ThemeScreen({navigation,route})
{
    return (
        <View style={styles.container} >
        <ThemeComponent source={require("../assets/languages.png")} color={"#6AF8BE"} borderColor={"#00D27D"} text={route.params.pre} fr={route.params.fr} link={"SubTheme"} navigation={navigation}  />
        <ThemeComponent source={require("../assets/mental.png")} color={"#D7D5F7"} borderColor={"#8490FF"} text={route.params.deu} />
        <ThemeComponent source={require("../assets/science.png")} color={"#FDCCCC"} borderColor={"#FF84A1"} text={route.params.troi} />
        <ThemeComponent source={require("../assets/creativity.png")} color={"#F6EDC8"} borderColor={"#FFFA84"} text={route.params.qua} />
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