import React, { useState,useEffect } from "react";
import {Text,Image,View,StyleSheet} from "react-native";
import Thirdgamecontent from "../components/Thirdgamecontent";

const Thirdgame = () => {

    const [next, setNext] = useState("homme");
    const [score,setscore]=useState("5");

    const watermelon=require('../assets/watemelon.png');
    const mother=require('../assets/mother.png');
    const father=require('../assets/father.png');
    const castle=require('../assets/castle.png');

    const wrongwatermelon=require('../assets/wrongwatermelon.png');
    const wrongmother=require('../assets/wrongmother.png');
    const wrongcastle=require('../assets/wrongcastle.png');

    const rightfather=require('../assets/rightfather.png');

    const [imagewatermelon, setImagewatermelon] = useState(watermelon);
    const [imagemother, setImagemother] = useState(mother);
    const [imagefather, setImagefather] = useState(father);
    const [imagecastle, setImagecastle] = useState(castle);

    const Nextfunction=(props)=>{
        const next=props.next;
        if(next=="homme"){
            return(
                <Thirdgamecontent 
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="C'est qui l'homme ?"  
                next="femme"    
                setNext={setNext}
              />
            )
        }
        if(next=="femme"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="C'est qui la femme ?"  
                next="bebe"    
                setNext={setNext}
              />
            )
        }
        if(next=="bebe"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="C'est qui le bébé ?"  
                next="pasteque"    
                setNext={setNext}
              />
            )
        }
        if(next=="pasteque"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="Ou est la pastèque ?"  
                next="garcon"    
                setNext={setNext}
              />
            )
        }
        if(next=="garcon"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="C'est qui le garcon ?"  
                next="palais"    
                setNext={setNext}
              />
            )
        }
        if(next=="palais"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="Ou est le palais ?"  
                next="chien"    
                setNext={setNext}
              />
            )
        }
        if(next=="chien"){
            return(
                <Thirdgamecontent  
                score={score}
                setscore={setscore}
                imagewatermelon={imagewatermelon} 
                setImagewatermelon={setImagewatermelon}
                imagemother={imagemother}
                setImagemother={setImagemother} 
                imagefather={imagefather} 
                setImagefather={setImagefather} 
                imagecastle={imagecastle} 
                setImagecastle={setImagecastle} 
                wrongwatermelon={wrongwatermelon} 
                wrongcastle={wrongcastle} 
                wrongmother={wrongmother} 
                rightfather={rightfather} 
                title="Ou est le chien ?"  
                next="chien"    
                setNext={setNext}
              />
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setImagewatermelon(watermelon);
            setImagemother(mother);
            setImagefather(father);
            setImagecastle(castle)
        }, 2000);
      });

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