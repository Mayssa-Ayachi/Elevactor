import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFont, Group, useTouchHandler } from "@shopify/react-native-skia";
import { StyleSheet, View,Image, TouchableOpacity,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Word from "../components/Word";


const game=['AIR','NATURE','TERRE','ARBRE','MARCHER','EAU']
const list = [['T', 'R', 'Y', 'W', 'X', 'K', 'M'], ['E', 'R', 'U', 'T', 'A', 'N', 'A'], ['R', 'R', 'R', 'R', 'R', 'U', 'R'], ['R', 'R', 'B', 'B', 'B', 'B', 'C'], ['E', 'E', 'A', 'I', 'R', 'R', 'H'], ['Z', 'E', 'A', 'U', 'E', 'A', 'E'], ['X', 'A', 'D', 'F', 'H', 'K', 'R']];
const jj = [[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false],
[false, false, false, false, false, false, false], [false, false, false, false, false, false, false], [false, false, false, false, false, false, false],
[false, false, false, false, false, false, false]];
const hh=[[{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}], [{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}], [{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}],
[{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}], [{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255},{red:255,blue:255,green:255}], [{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}],
[{red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}, {red:255,blue:255,green:255}]];
const Sudoku = () => {
    let time = 0;
    let prevPoint;
    const word = useRef([]);
    const pressed = useRef(jj);
    const [point, setPoint] = useState({ px: 0, py: 0, x: null, y: null });
    const color=useRef(hh);
    const randomColor=useRef({red:0,blue:0,green:0})
    const font = useFont(require("../assets/fonts/FontsFree-Net-Montserrat-ExtraBold.ttf"), 25);
    const wordTest=useRef("");
    const touchHandler = useTouchHandler({
        onStart: (event) => {
            randomColor.current={red:Math.random()*240,blue:Math.random()*240,green:Math.random()*240};
            setPoint({ px: 0, py: 0, x: event.x, y: event.y })
            time = event.timestamp;
        },
        onActive: (event) => {
            if (event.timestamp > time + 0.2) {
                time += 0.1;
                prevPoint = { px: point.x, py: point.y, x: event.x, y: event.y };
                setPoint(prevPoint)
            }
        },
        onEnd: () => {
            setPoint({ px: 0, py: 0, x: null, y: null });
            console.log(word.current)
            for (let i = 0; i < word.current.length; i++) {
                const c = word.current[i].split(" ");
                wordTest.current+=list[c[0]][c[1]];
            }
            const index=game.indexOf(wordTest.current);
            if (index!==-1)
            {
                game.splice(index,1)
            }
            else 
            {
                for (let i = 0; i < word.current.length; i++) {
                    const c = word.current[i].split(" "); 
                    pressed.current[c[0]][c[1]]=false;
                    console.log(color.current[c[0]][c[1]])
                    console.log('majda')
                    console.log(randomColor.current)
                    const data={red:(color.current[c[0]][c[1]].red*2)-randomColor.current.red,blue:(color.current[c[0]][c[1]].blue*2)-randomColor.current.blue,green:(color.current[c[0]][c[1]].green*2)-randomColor.current.green}
                    console.log('-')
                    console.log(data)
                    color.current[c[0]][c[1]]={...data};
                }
            }
            console.log(wordTest.current);
            wordTest.current="";
            word.current=[];
            console.log(game)
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
            <Image source={require('../assets/icon-fr.png')} />
            <View style={styles.icons}>
            <Image style={styles.image} source={require('../assets/musical-notes.png')} />
            <Image source={require('../assets/home.png')} />
            </View>
                </View>
                <TouchableOpacity style={{width:"60%",height:"20%",alignSelf:'center',marginBottom:0}}>
                <LinearGradient
        colors={['#C20232', '#7E0080']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}} style={styles.button}>
            <Text style={styles.textbutton}>Trouvez les mots !</Text>
        </LinearGradient>
        </TouchableOpacity>
            <Canvas style={{ flex: 1}} onTouch={touchHandler} >
                <Group>
                    {list.map((array, i) => array.map((elem, j) => {
                        return (
                            <Word key={`${i}^${j}`} i={i} j={j} elem={elem}
                                font={font} point={point} pressed={pressed} word={word} color={color.current} randomColor={randomColor.current} />
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
    },
    navBar:{
        flexDirection:'row',justifyContent:'space-between'
    },
    icons:{
        flexDirection:'row',marginTop:'3%'
    },
    image:{
        marginRight:"10%"
    },
    button:{
        alignItems:"center",
        borderRadius:20,
        marginTop:"5%",
        marginBottom:0,
        justifyContent:"center"
    },
    textbutton:{
        fontWeight:'bold',
        color:"white",
        fontSize:18,
        paddingVertical:"5%"
    }
});
export default Sudoku;