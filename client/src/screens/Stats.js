import React from 'react';
import { StyleSheet, View , Text , ScrollView,screenWidth,Image} from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { LinearGradient } from 'expo-linear-gradient';
import Donut from '../components/Pie';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Stats({ navigation }){

    const barData = [
        {value: 650, label: 'M' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value: 500, label: 'T',labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value: 400, label: 'W' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value: 500, label: 'T' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value: 650, label: 'F' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value:380, label: 'S' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
        {value: 280, label: 'S' , labelTextStyle: {color: '#4A1290',fontWeight:'700'},},
    ];

    const Piedata = [{
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
            <Text style={styles.text1}>PARENT</Text>
             <View style={styles.fleche}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image source={require("../../assets/loop.png")}></Image>
              </TouchableOpacity>
            </View>
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
              <TouchableOpacity
                onPress={() =>
                    navigation.navigate('parentlang')}
              >
                  <Donut percentage={8} color={'#00D27D'} delay={500 + 100 * 2} max={10} text={'Langue'} image={require('../assets/languages.png')} />
              </TouchableOpacity>
              {Piedata.map((p, i) => {
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
        fontFamily:'Roboto'
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
    
  },
  fleche: {
    marginTop:'15%',
    position:'absolute',
    marginLeft:'80%',
  }
})