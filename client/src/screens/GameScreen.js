import React, { useState,useEffect } from "react";
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from "../components/ButtonComponent";
import WinComponent from "../components/WinComponent";
/* Game1 */

function GameScreen() {
    useEffect(()=>{styles.button={...styles.button,backgroundColor:'#EAEAFF'}})
    const phrase="l’eau de la planet est de plus en plus rare";
    const [tab1, setTab1] = useState(["de plus en plus rare", "est", "l’eau de la planet"]);
    const [tab2, setTab2] = useState([]);
    const [verif, setVerif] = useState(false);
    const [win, setWin] = useState(false);
    const [showComponent,setShowComponent]=useState(false);
    return (
        <View style={styles.all} >
            <View style={styles.container1}>
                <Image source={require('../assets/icon-fr.png')} />
                <View style={styles.container2}>
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/musical-notes.png')} />
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/home.png')} />
                </View>
            </View>
            <TouchableOpacity style={styles.screenbutton} >
                <Text style={styles.text}>Organiser les mots pour obtenir une phrase cohérente !</Text>
            </TouchableOpacity>
            <Image style={styles.picture} source={require('../assets/pic1.png')} />
            <View style={{flexDirection:"column"}}>
            <View>
                <View style={{ ...styles.container4,height:130}} >
                    {tab2.map((elem) => <ButtonComponent styles={{button:styles.button,text:styles.buttontext}} key={elem} title={elem} press={() => {
                        (!tab1.length) ? styles.button={...styles.button,backgroundColor: '#EAEAFF'} :null;
                        setTab2(tab2.filter(word => word !== elem));
                        setTab1([...tab1, elem]);
                        setVerif(false);
                    }} />)}
                </View>

                <View style={{ backgroundColor: '#0029FF', height: 2, width: 310, alignSelf: "center" }} />
            </View>
            <View style={{...styles.container4}} >
                {tab1.map((elem) => <ButtonComponent styles={{button:styles.button,text:styles.buttontext}} key={elem} title={elem} press={() => {
                    setTab2([...tab2, elem]);
                    setTab1(tab1.filter(word => word !== elem));
                }} />) 
                }
                {(tab1.length===0)&&(!verif) ? verification(tab2,phrase,setVerif,setWin) : null}
            </View>
        </View>
        {(win) ? gagner(setShowComponent) : null }  
        {(showComponent) ?<WinComponent />: null}

        </View>
    )
}

function gagner(setShowComponent)
{
    setTimeout(() => { setShowComponent(true)}, 2000);
}
 function verification(tab2,phrase,setVerif,setWin)
 {
     const reponse=tab2.join(' ');
     console.log(reponse)
     if (reponse!==phrase)
     {
        styles.button={...styles.button,backgroundColor:"red"}
    }
    else 
    {
        styles.button={...styles.button,backgroundColor:"green"}
        setWin(true)
    }
    setVerif(true);
}
const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        marginHorizontal:5,
        borderRadius: 20,
        marginTop: 8,
        backgroundColor: '#EAEAFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    buttontext: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#3333AD'
    },
    container1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container4: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    screenbutton: {
        backgroundColor: '#18A43D',
        alignSelf: "center",
        width: 300,
        borderRadius: 20,
        marginTop: 2
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 5
    },
    picture: {
        marginVertical: 3,
        alignSelf: "center",
    },
    all: {
        backgroundColor: 'white', flex: 1
    }
})

export default GameScreen;