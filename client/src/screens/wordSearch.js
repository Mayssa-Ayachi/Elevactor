import React from "react";
import { Image,StyleSheet,View , Text} from "react-native";
import {useState,useRef} from 'react';
import { Canvas, useFont, Group,useTouchHandler,useContextBridge} from "@shopify/react-native-skia";
import Word from "../components/Word";
import WordCard from "../components/wordCard";

const WordSearch = ()=> {
    const list = [['T','R','Y','W','X','K','M'], ['E','R','U','T','A','N','A'], ['R','R','R','R','R','U','R'],['R','R','B','B','B','B','C'], ['E','E','A','I','R','R','H'],['Z','E','A','U','E','A','E'], ['X','A','D','F','H','K','R']];
    const jj =[[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false]];
    let time=0;
    let prevPoint;
    const word = useRef([]);
    const pressed = useRef(jj);
    const [point,setPoint]=useState({px:0,py:0,x:null,y:null});
    const font = useFont(require("../assets/fonts/FontsFree-Net-Montserrat-ExtraBold.ttf"), 25);
    const words1 = ['AIR','TERRE','MARCHER']
    const words2 = ['NATURE','ARBRE','EAU']
    const touchHandler=useTouchHandler({
        onStart : (event)=>{setPoint({px:0,py:0,x:event.x,y:event.y})
                                time=event.timestamp;},
        onActive : (event)=>{
                if (event.timestamp>time+0.1)
                {
                    time+=0.1;
                    prevPoint={px:point.x,py:point.y,x:event.x,y:event.y};
                    setPoint(prevPoint)
                }
            },        
        onEnd : ()=> {
            setPoint({px:0,py:0,x:null,y:null});
            console.log(word.current)
            for (let i=0;i<word.current.length;i++)
            {
                const c=word.current[i].split(" ");
            }
            console.log(word.current.splice(''));
            word.current=[];
    }
    })
   

    return (
    <View >
        <View style={styles.container1}>
        <Image source={require('../assets/icon-fr.png')} />
        <View style={styles.container2}>
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/musical-notes.png')} />
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/home.png')} />
                </View>
        </View>

        <View style={styles.container3}>
            <Text style={styles.text1}>Trouvez les mots !</Text>
        </View>
            <Canvas style={styles.container} onTouch={touchHandler} >
                <Group>
                    {list.map((array, i) => array.map((elem, j) => {
                        return (
                            <Word key={`${i}^${j}`} i={i} j={j} elem={elem}
                             font={font} point={point} pressed={pressed} word={word} />
                        )
                    }))}
                </Group>
            </Canvas>
        <View style={styles.container5}>
            {words1.map((word)=>{
                return (
                    <WordCard label={word}/>
                )
            })}
        </View>
        <View style={styles.container4}>
            {words2.map((word)=>{
                return (
                    <WordCard label={word}/>
                )
            })}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop : '10%',
    },
    container3:{
        backgroundColor:'#C20232',
        width:'80%',
        height:'15%',
        borderRadius:30,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:'5%'

    },
    text1: {
        color:'#fff',
        fontWeight: '700',
        fontSize:20,
        textAlign:'center'
    
    }, 

    text: {
        backgroundColor: '#9B51B4',
    },
    container4 :{
        marginTop:'170%',
        marginLeft: '8%',
        position:'absolute'
    },
    container5 :{
        marginTop : '170%',
        marginLeft:'53%',
        position:'absolute'
    }, 
    container: {
        flex:1 ,
        height:'100%',
        padding:'60%',
        position:'absolute',
        marginTop:'45%',
       
        
    },
    
})

export default WordSearch;



