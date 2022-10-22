import React, { useEffect, useState,useRef } from "react";
import { Canvas, useFont, Group,useTouchHandler} from "@shopify/react-native-skia";
import {StyleSheet, View } from "react-native";
import Word from "../components/Word";



const list = [['T','R','Y','W','X','K','M'], ['E','R','U','T','A','N','A'], ['R','R','R','R','R','U','R'],['R','R','B','B','B','B','C'], ['E','E','A','I','R','R','H'],['Z','E','A','U','E','A','E'], ['X','A','D','F','H','K','R']];
const jj =[[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false]];
const Sudoku = () => {
    let time=0;
    let prevPoint;
    const word = useRef([]);
    const pressed = useRef(jj);
    const [point,setPoint]=useState({px:0,py:0,x:null,y:null});
    const font = useFont(require("../assets/fonts/FontsFree-Net-Montserrat-ExtraBold.ttf"), 25);

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
        <View style={styles.container}>
            <Canvas style={{ flex: 1 }} onTouch={touchHandler} >
                <Group>
                    {list.map((array, i) => array.map((elem, j) => {
                        return (
                            <Word key={`${i}^${j}`} i={i} j={j} elem={elem}
                             font={font} point={point} pressed={pressed} word={word} />
                        )
                    }))}
                </Group>
            </Canvas>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'black',
    },
    text: {
        backgroundColor: 'red',
    }
});
export default Sudoku;