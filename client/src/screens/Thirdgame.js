import React, { useState,useEffect } from "react";
import {Text,Image,View,StyleSheet} from "react-native";
import Thirdgamecontent from "../components/Thirdgamecontent";

const Thirdgame = () => {

    const [score,setscore]=useState(5);

    const [homme,sethomme]=useState("Où est l'Homme ?");
    const [femme,setfemme]=useState("Où est la Femme ?");
    const [bebe,setbebe]=useState("Où est le bébé ?");
    const [garcon,setgarcon]=useState("Où est le Palais ?");
    const [palais,setpalais]=useState("Où est le Chien ?");
    const [pasteque,setpasteque]=useState("Où est le Garçon ?");
    const [chien,setchien]=useState("Où est la Pastèque ?");

    const [imagewatermelon, setImagewatermelon] = useState(require('../assets/watemelon.png'));
    const [imagewrongwatermelon, setwrongwatermelon] = useState(require('../assets/wrongwatermelon.png'));

    const [imagemother, setImagemother] = useState(require('../assets/mother.png'));
    const [imagewrongmother, setwrongmother] = useState(require('../assets/wrongmother.png'));

    const [imagefather, setImagefather] = useState(require('../assets/father.png'));
    const [imagerightfather, setwrongfather] = useState(require('../assets/rightfather.png'));

    const [imagecastle, setImagecastle] = useState(require('../assets/castle.png'));
    const [imagewrongcastle, setwrongcastle] = useState(require('../assets/wrongcastle.png'));

    const [levels,setlevels]=useState(()=>{return([
        {theme:homme,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:femme,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:palais,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:pasteque,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:bebe,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:garcon,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:chien,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
    ].sort(()=> Math.random() - 0.5))});

    const [next, setNext] = useState(levels[0].theme);
    {console.log("render")}
     
 
    const Nextfunction=(props)=>{
        const next=props.next;
        console.log(next+"2");
       
            if(next==levels[0].theme){
                return(
                    <Thirdgamecontent 
                    score={score}
                    setscore={setscore}
                    ims1={setImagemother}
                    image1={levels[0].im1} 
                    image2={levels[0].im2}
                    image3={levels[0].im3} 
                    image4={levels[0].im4} 
                    trueim1={levels[0].trueim1}  
                    wrongim2={levels[0].wrongimg2} 
                    wrongim3={levels[0].wrongim3} 
                    wrongim4={levels[0].wrongim4} 
                    title={levels[0].theme}  
                    next={levels[1].theme}   
                    setNext={setNext}
                  />
                )
            }
            if(next==levels[1].theme){
                return(
                    <Thirdgamecontent  
                    score={score}
                    setscore={setscore}
                    ims1={setImagemother}
                    image1={levels[1].im1} 
                    image2={levels[1].im2}
                    image3={levels[1].im3} 
                    image4={levels[1].im4} 
                    trueim1={levels[1].trueim1}  
                    wrongim2={levels[1].wrongimg2} 
                    wrongim3={levels[1].wrongim3} 
                    wrongim4={levels[1].wrongim4}  
                    title={levels[1].theme}     
                    next={levels[2].theme}   
                    setNext={setNext}
                  />
                )
            }
            if(next==levels[2].theme){
                return(
                    <Thirdgamecontent  
                    score={score}
                    setscore={setscore}
                    ims1={setImagemother}
                    image1={levels[2].im1} 
                    image2={levels[2].im2}
                    image3={levels[2].im3} 
                    image4={levels[2].im4} 
                    trueim1={levels[2].trueim1}  
                    wrongim2={levels[2].wrongimg2} 
                    wrongim3={levels[2].wrongim3} 
                    wrongim4={levels[2].wrongim4} 
                    title={levels[2].theme}   
                    next={levels[2].theme}    
                    setNext={setNext}
                  />
                )
            } 
    }

 
    useEffect(() => {
            setImagewatermelon(require('../assets/watemelon.png'));
            setImagemother(require('../assets/mother.png'));
            setImagefather(require('../assets/father.png'));
            setImagecastle(require('../assets/castle.png'))
        },[next]);

     return(
        <View style={styles.all} >
            <View style={styles.container1}>
            <Image source={require('../assets/icon-fr.png')} />
                <View style={styles.container2}>
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/musical-notes.png')} />
                    <Image style={{ marginRight: 15, marginTop: 20 }} source={require('../assets/home.png')} />
                </View>
            </View>
         <Nextfunction next={next}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    container1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    all: {
        backgroundColor: 'white', flex: 1
    }
});

export default Thirdgame;