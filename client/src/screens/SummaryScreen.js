import React from 'react';
import { StyleSheet, View , Text , ImageBackground} from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import {showGradient} from "react-native-linear-gradient";

export default function SummaryScreen(){
    const barData = [
        {value: 650, label: 'M' , labelTextStyle: {color: '#4A1290'},},
        {value: 500, label: 'T',labelTextStyle: {color: '#4A1290'},},
        {value: 400, label: 'W' , labelTextStyle: {color: '#4A1290'},},
        {value: 500, label: 'T' , labelTextStyle: {color: '#4A1290'},},
        {value: 650, label: 'F' , labelTextStyle: {color: '#4A1290'},},
        {value:380, label: 'S' , labelTextStyle: {color: '#4A1290'},},
        {value: 280, label: 'S' , labelTextStyle: {color: '#4A1290'},},
    ];
    return (
        <View>
            {/* <ImageBackground source={require('../assets/BGIMAGE.png')} style={styles.image} resizeMode="cover" > */}
            <Text style={styles.text}>SUMMARY</Text>
        <View
        style={{
            // backgroundColor: '#333340',
            paddingBottom: 40,
            borderRadius: 10,
            marginTop: '55%',
          }}
        >
        <BarChart 
        styles={styles.container}
        data={barData}
        frontColor={'#837DFF'}
        barWidth={15}
        barBorderRadius={8}
        // noOfSections={1}
        yAxisThickness={0}
        xAxisThickness={0}
        disablePress
        isAnimated
        hideYAxisText
        hideRules
        />
        </View>
        {/* </ImageBackground> */}
        </View>
    )
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
   image: {
    position:'absolute',
    flex: 1,
  },
})