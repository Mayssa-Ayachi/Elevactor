import React, { useState,useEffect, useRef  } from "react";
import {Text,Image,View,StyleSheet,TouchableOpacity} from "react-native";

const Thirdgamecontent = (props) => {
     

    const [images,setimages]=useState(()=>{return([{im:props.image1,id:1,imc:props.trueim1},{im:props.image2,id:2,imc:props.wrongim2},
        {im:props.image3,id:3,imc:props.wrongim3},{im:props.image4,id:4,imc:props.wrongim4}].sort(()=> Math.random() - 0.5))});

    {console.log(images)}
    const [img0,setimg0]=useState(images[0].im);
    const [imgc0,setimgc0]=useState(images[0].imc);

    const [img1,setimg1]=useState(images[1].im);
    const [imgc1,setimgc1]=useState(images[1].imc);

    const [img2,setimg2]=useState(images[2].im);
    const [imgc2,setimgc2]=useState(images[2].imc);

    const [img3,setimg3]=useState(images[3].im);
    const [imgc3,setimgc3]=useState(images[3].imc);

    const press=(ref)=>{
       

        setimg0(imgc0);
        setimg1(imgc1);
        setimg2(imgc2);
        setimg3(imgc3);
 
        console.log("waaaaaaaaaaaaaa");

        setTimeout(()=>{ if (ref!=props.id){
            props.setscore(props.score-1);
            console.log(props.score);}
            props.setNext(props.next)},2000)
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
                        <TouchableOpacity  onPress={()=>press(images[0].id)} style={styles.choice}>
                            <Image  source={img0} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>press(images[1].id)} style={styles.choice}>
                            <Image source={img1} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.choices} >
                        <TouchableOpacity onPress={()=>press(images[2].id)}  style={styles.choice}>
                            <Image  source={img2} />
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>press(images[3].id)}  style={styles.choice}>
                            <Image  source={img3} />
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