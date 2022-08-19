import React, { useState,useEffect } from "react";
import {Text,Image,View,StyleSheet} from "react-native";
import Thirdgamecontent from "../components/Thirdgamecontent";

const Thirdgame = () => {

    const [score,setscore]=useState(5);
    const [hint,sethint]=useState(1);

    const [homme,sethomme]=useState("Où est l'Homme ?");
    const [femme,setfemme]=useState("Où est la Femme ?");
    const [bebe,setbebe]=useState("Où est le bébé ?");
    const [garcon,setgarcon]=useState("Où est le Garçon ?");
    const [palais,setpalais]=useState("Où est le Palais?");
    const [pasteque,setpasteque]=useState("Où est la Pastèque ?");
    const [chien,setchien]=useState("Où est le Chien ?");

    const progresbar1=require('../assets/progresbar1.png');
    const progresbar2=require('../assets/progresbar2.png');
    const progresbar3=require('../assets/progresbar3.png');
    const progresbar4=require('../assets/progresbar4.png');
    const progresbar5=require('../assets/progresbar5.png');
    const progresbar6=require('../assets/progresbar6.png');
    const progresbar7=require('../assets/progresbar7.png');

    const [imagewatermelon, setImagewatermelon] = useState(require('../assets/watemelon.png'));
    const [imagewrongwatermelon, setwrongwatermelon] = useState(require('../assets/wrongwatermelon.png'));
    const [imagerightwatermelon, setrightwatermelon] = useState(require('../assets/rightwatemelon.png'));

    const [imagemother, setImagemother] = useState(require('../assets/mother.png'));
    const [imagewrongmother, setwrongmother] = useState(require('../assets/wrongmother.png'));
    const [imagerightmother, setrightmother] = useState(require('../assets/rightmother.png'));

    const [imagefather, setImagefather] = useState(require('../assets/father.png'));
    const [imagerightfather, setrightfather] = useState(require('../assets/rightfather.png'));
    const [imagewrongfather, setwrongfather] = useState(require('../assets/wrongfather.png'));

    const [imagecastle, setImagecastle] = useState(require('../assets/castle.png'));
    const [imagewrongcastle, setwrongcastle] = useState(require('../assets/wrongcastle.png'));
    const [imagerightcastle, setrightcastle] = useState(require('../assets/rightcastle.png'));

    const [imagebb, setImagebb] = useState(require('../assets/bb.png'));
    const [imagewrongbb, setwrongbb] = useState(require('../assets/wrongbebe.png'));
    const [imagerightbb, setrightbb] = useState(require('../assets/truebb.png'));

    const [imagedog, setImagedog] = useState(require('../assets/dog.png'));
    const [imagewrongdog, setwrongdog] = useState(require('../assets/wrongdog.png'));
    const [imagerightdog, setrightdog] = useState(require('../assets/truedog.png'));

    const [imagegarcon, setImagegarcon] = useState(require('../assets/garcon.png'));
    const [imagewronggarcon, setwronggarcon] = useState(require('../assets/wrongboy.png'));
    const [imagerightgarcon, setrightgarcon] = useState(require('../assets/truegarcon.png'));

    const [imagegrandmother, setImagegrandmother] = useState(require('../assets/grandmother.png'));
    const [imagewronggrandmother, setwronggrandmother] = useState(require('../assets/wronggrandmother.png'));

    const [imagefille, setImagefille] = useState(require('../assets/fille.png'));
    const [imagewrongfille, setwrongfille] = useState(require('../assets/wrongfille.png'));
    
    const [imagefamily, setImagefamily] = useState(require('../assets/family.png'));
    const [imagewrongfamily, setwrongfamily] = useState(require('../assets/wrongfam.png'));

    const [levels,setlevels]=useState(()=>{return([
        {theme:homme,im1:imagefather,im2:imagemother,im3:imagewatermelon,im4:imagecastle,trueim1:imagerightfather,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongcastle},
        {theme:femme,im1:imagemother,im2:imagebb,im3:imagedog,im4:imagecastle,trueim1:imagerightmother,wrongimg2:imagewrongbb,wrongim3:imagewrongdog,wrongim4:imagewrongcastle},
        {theme:pasteque,im1:imagewatermelon,im2:imagefather,im3:imagegarcon,im4:imagecastle,trueim1:imagerightwatermelon,wrongimg2:imagewrongfather,wrongim3:imagewronggarcon,wrongim4:imagewrongcastle},
        {theme:palais,im1:imagecastle,im2:imagemother,im3:imagewatermelon,im4:imagefather,trueim1:imagerightcastle,wrongimg2:imagewrongmother,wrongim3:imagewrongwatermelon,wrongim4:imagewrongfather},
        {theme:bebe,im1:imagebb,im2:imagedog,im3:imagegarcon,im4:imagegrandmother,trueim1:imagerightbb,wrongimg2:imagewrongdog,wrongim3:imagewronggarcon,wrongim4:imagewronggrandmother},
        {theme:garcon,im1:imagegarcon,im2:imagebb,im3:imagefille,im4:imagefamily,trueim1:imagerightgarcon,wrongimg2:imagewrongbb,wrongim3:imagewrongfille,wrongim4:imagewrongfamily},
        {theme:chien,im1:imagedog,im2:imagefather,im3:imagebb,im4:imagefille,trueim1:imagerightdog,wrongimg2:imagewrongfather,wrongim3:imagewrongbb,wrongim4:imagewrongfille},
    ].sort(()=> Math.random() - 0.5))});

    const [next, setNext] = useState(levels[0].theme);
    {console.log("render")}
     
 
    const Nextfunction=(props)=>{
        const next=props.next;
        console.log(next+"2");
       
            if(next==levels[0].theme){
                return(
                    <Thirdgamecontent 
                    hint={hint}
                    sethint={sethint}
                    score={score}
                    progresbar={progresbar1}
                    setscore={setscore}
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
                    hint={hint}
                    sethint={sethint}
                    score={score}
                    progresbar={progresbar2}
                    setscore={setscore}
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
                    hint={hint}
                    sethint={sethint}
                    score={score}
                    setscore={setscore}
                    progresbar={progresbar3}
                    image1={levels[2].im1} 
                    image2={levels[2].im2}
                    image3={levels[2].im3} 
                    image4={levels[2].im4} 
                    trueim1={levels[2].trueim1}  
                    wrongim2={levels[2].wrongimg2} 
                    wrongim3={levels[2].wrongim3} 
                    wrongim4={levels[2].wrongim4} 
                    title={levels[2].theme}   
                    next={levels[3].theme}    
                    setNext={setNext}
                  />
                )
            } 

            if(next==levels[3].theme){
                return(
                    <Thirdgamecontent 
                    hint={hint}
                    sethint={sethint} 
                    score={score}
                    setscore={setscore}
                    progresbar={progresbar4}
                    image1={levels[3].im1} 
                    image2={levels[3].im2}
                    image3={levels[3].im3} 
                    image4={levels[3].im4} 
                    trueim1={levels[3].trueim1}  
                    wrongim2={levels[3].wrongimg2} 
                    wrongim3={levels[3].wrongim3} 
                    wrongim4={levels[3].wrongim4} 
                    title={levels[3].theme}
                    next={levels[4].theme}  
                    setNext={setNext}
                  />
                )
            }
            if(next==levels[4].theme){
                return(
                    <Thirdgamecontent 
                    hint={hint}
                    sethint={sethint} 
                    score={score}
                    progresbar={progresbar5}
                    setscore={setscore}
                    image1={levels[4].im1} 
                    image2={levels[4].im2}
                    image3={levels[4].im3} 
                    image4={levels[4].im4} 
                    trueim1={levels[4].trueim1}  
                    wrongim2={levels[4].wrongimg2} 
                    wrongim3={levels[4].wrongim3} 
                    wrongim4={levels[4].wrongim4}  
                    title={levels[4].theme}  
                    next={levels[5].theme}   
                    setNext={setNext}
                  />
                )
            }
            if(next==levels[5].theme){
                return(
                    <Thirdgamecontent 
                    hint={hint}
                    sethint={sethint} 
                    score={score}
                    progresbar={progresbar6}
                    setscore={setscore}
                    image1={levels[5].im1} 
                    image2={levels[5].im2}
                    image3={levels[5].im3} 
                    image4={levels[5].im4} 
                    trueim1={levels[5].trueim1}  
                    wrongim2={levels[5].wrongimg2} 
                    wrongim3={levels[5].wrongim3} 
                    wrongim4={levels[5].wrongim4}  
                    title={levels[5].theme}  
                    next={levels[6].theme}    
                    setNext={setNext}
                  />
                )
            }
            if(next==levels[6].theme){
                return(
                    <Thirdgamecontent
                    hint={hint}
                    sethint={sethint}  
                    score={score}
                    progresbar={progresbar7}
                    setscore={setscore}
                    image1={levels[6].im1} 
                    image2={levels[6].im2}
                    image3={levels[6].im3} 
                    image4={levels[6].im4} 
                    trueim1={levels[6].trueim1}  
                    wrongim2={levels[6].wrongimg2} 
                    wrongim3={levels[6].wrongim3} 
                    wrongim4={levels[6].wrongim4}  
                    title={levels[6].theme}  
                    next={levels[6].theme} 
                    setNext={setNext}
                  />
                )
                }
    }


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