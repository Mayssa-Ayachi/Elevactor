import React, { useState,useEffect, useRef  } from "react";
import {Text,Image,View,StyleSheet,TouchableOpacity} from "react-native";

const Thirdgamecontent = () => {

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

    const press=()=>{
        setImagewatermelon(wrongwatermelon);
        setImagemother(wrongmother);
        setImagefather(rightfather);
        setImagecastle(wrongcastle);
    }
    return(
         <View>
 
                <View style={styles.header}>
                        <View>
                            <Image source={require('../assets/progresbar1.png')} />          
                        </View>
                    
                        <View style={styles.life}>
                            <Image source={require('../assets/love-02.png')} />
                            <Text style={{color:"#FF5E43",fontWeight:"bold",fontSize:27}}>{score}</Text>
                        </View>
                </View>    

                <View style={styles.rectangle} >
                    <Image source={require('../assets/bleurectangle.png')} />
                    <View style={styles.theme}>
                        <Text style={{fontWeight:"bold",fontSize:23,color:"white"}}>Ç'est qui l'homme ?</Text> 
                    </View>         
                </View>
                
                <View style={styles.allchoices}>
                    <View style={styles.choices} >
                        <TouchableOpacity onPress={()=>{press();setscore("4")}} style={styles.choice}>
                            <Image source={imagewatermelon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{press();setscore("4")}} style={styles.choice}>
                            <Image source={imagemother} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.choices} >
                        <TouchableOpacity onPress={press} style={styles.choice}>
                            <Image source={imagefather} />
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>{press();setscore("4")}} style={styles.choice}>
                            <Image source={imagecastle} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.lampe}>
                    <Image source={require('../assets/lampenonalumée.png')} />               
                </View>
          </View>        
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:"10%"
    },
    life:{
        flexDirection:"row",
        alignItems:"center"
    },
    rectangle:{
        marginTop:"6%",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"center",
        alignItems:"center"
    },
    theme:{
        position:"absolute",  
    },
    allchoices:{
        marginTop:"10%",
    },
    choices:{
        flexDirection:"row",
        marginLeft:"auto",
        marginRight:"auto",
    },
    choice:{
        margin:"5%"
    },
    lampe:{
        marginLeft:"auto",
        marginRight:"auto",  
    },
    new:{
        margin:"50%"
    }
   
});
export default Thirdgamecontent;