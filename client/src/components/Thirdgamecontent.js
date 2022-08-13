import React, { useState,useEffect, useRef  } from "react";
import {Text,Image,View,StyleSheet,TouchableOpacity} from "react-native";

const Thirdgamecontent = (props) => {
    const [ref1,setref1]=useState("1");
    const [ref2,setref2]=useState("2");
    const [ref3,setref3]=useState("3");
    const [ref4,setref4]=useState("4");

 
    const renderImage = () => {
        const Images = [
          { image: props.Imagewatermelon,ref:"1" },
          { image:  props.Imagemother,ref:"2" },
          { image: props.Imagefather,ref:"3" },
          { image: props.Imagecastle,ref:"4" },
        ];
        const randomImageIndex = Math.floor(Math.random() * Math.floor(4));
        return Images[randomImageIndex].image;
    };    
  
    const press=(ref)=>{
 
         if (ref!=props.id){
            props.setscore(props.score-1);
            console.log(props.score);
        }

        props.setImagewatermelon(props.wrongwatermelon);
        props.setImagemother(props.wrongmother);
        props.setImagefather(props.rightfather);
        props.setImagecastle(props.wrongcastle);
        setTimeout(()=>props.setNext(props.next),2000)
    }

 
    return(
         <View>
 
                <View style={styles.header}>
                        <View>
                            <Image source={require('../assets/progresbar1.png')} />          
                        </View>
                    
                        <View style={styles.life}>
                            <Image source={require('../assets/love-02.png')} />
                            <Text style={{color:"#FF5E43",fontWeight:"bold",fontSize:27}}>{props.score}</Text>
                        </View>
                </View>    

                <View style={styles.rectangle} >
                    <Image source={require('../assets/bleurectangle.png')} />
                    <View style={styles.theme}>
                        <Text style={{fontWeight:"bold",fontSize:23,color:"white"}}>{props.title}</Text> 
                    </View>         
                </View>
                
                <View style={styles.allchoices}>
                    <View style={styles.choices} >
                        <TouchableOpacity  onPress={()=>press(ref1)} style={styles.choice}>
                            <Image source={props.imagewatermelon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>press(ref2)} style={styles.choice}>
                            <Image source={props.imagemother} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.choices} >
                        <TouchableOpacity onPress={()=>press(ref3)}  style={styles.choice}>
                            <Image source={props.imagefather} />
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>press(ref4)}  style={styles.choice}>
                            <Image source={props.imagecastle} />
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