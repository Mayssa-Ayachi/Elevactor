import React from 'react';
import { StyleSheet, View , Text , ScrollView,screenWidth} from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { LinearGradient } from 'expo-linear-gradient';
import Donut from '../components/Pie';
//import {BackdropFilter ,  BackdropBlur,Fill} from '@shopify/react-native-skia';
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

    const data = [{
        percentage: 8,
        color: '#00D27D',
        max: 10,
        text:'Langue',
        image : require('../assets/languages.png')
      }, {
        percentage: 14,
        color: '#8490FF',
        max: 20,
        text:'Dev',
        image :require('../assets/mental.png')
      }, {
        percentage: 92,
        color: '#F09CB0',
        max: 100,
        text:'Science',
        image : require('../assets/science.png')
      }, {
        percentage: 240,
        color: '#614AD3',
        max: 500,
        text:'Art',
        image :require('../assets/creativity.png')
      },
      ]

    return (
        <View>
            <LinearGradient  colors={['#9B51B4', '#fff']} style={styles.linearGradient}>
            {/* <BackdropBlur
        blur={4}
        clip={{ x: 0, y: 128, width: 256, height: 128 }}
      >
        <Fill color="rgba(0, 0, 0, 0.2)" />
      </BackdropBlur> */}
            <Text style={styles.text1}>PARENT</Text>
            <Text style={styles.text}>SUMMARY</Text>
        <View
        style={{
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
        yAxisThickness={0}
        xAxisThickness={0}
        disablePress
        isAnimated
        hideYAxisText
        hideRules
        ShowGradient={true}
        gradientColor={'#09F9BF'}
        />
        </View>
        <ScrollView horizontal={true} style={styles.scroll}>
                    {data.map((p, i) => {
                        return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} text={p.text} image={p.image}/>
                        })}
        </ScrollView>
        </LinearGradient>
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