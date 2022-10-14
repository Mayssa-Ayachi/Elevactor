import React, { useState  } from "react";
import {Text,Image,View,StyleSheet,TouchableOpacity} from "react-native";
 
const Thirdgamecontent = (props) => {
     
    const [hint,sethint]=useState(props.hint);

    const [images,setimages]=useState(()=>
    {return([{im:props.image1,id:1,imc:props.trueim1,imghint:props.imghint},{im:props.image2,id:2,imc:props.wrongim2,imghint:props.image2},
    {im:props.image3,id:3,imc:props.wrongim3,imghint:props.image3},{im:props.image4,id:4,imc:props.wrongim4,imghint:props.image4}].sort(()=> Math.random() - 0.5))});

    const [img0,setimg0]=useState(images[0].im);
    const [imgc0,setimgc0]=useState(images[0].imc);
    const [imgh0,setimgh0]=useState(images[0].imghint);

    const [img1,setimg1]=useState(images[1].im);
    const [imgc1,setimgc1]=useState(images[1].imc);
    const [imgh1,setimgh1]=useState(images[1].imghint);

    const [img2,setimg2]=useState(images[2].im);
    const [imgc2,setimgc2]=useState(images[2].imc);
    const [imgh2,setimgh2]=useState(images[2].imghint);

    const [img3,setimg3]=useState(images[3].im);
    const [imgc3,setimgc3]=useState(images[3].imc);
    const [imgh3,setimgh3]=useState(images[3].imghint);

    const press=(ref)=>{
        setimg0(imgc0);
        setimg1(imgc1);
        setimg2(imgc2);
        setimg3(imgc3);
 
        setTimeout(()=>{ 
            if (ref!=1){
                if(props.score==-1){
                    props.setscore(0);
                }
                else{
                    props.setscore(props.score-1);
                }
           
            }

            props.sethint(hint);
            props.setcount(props.count+1);
            props.setNext(props.next)},2000)
    }

    const Hint=()=>{
        if(props.hint==1){
            setimg0(imgh0);
            setimg1(imgh1);
            setimg2(imgh2);
            setimg3(imgh3);
            
        setTimeout(()=>{
            sethint(2);
            setimg0(img0);
            setimg1(img1);
            setimg2(img2);
            setimg3(img3);},2000)}
        }
    
    const Imagehint=()=>{
        if(props.hint==1){
            return(
                <View style={styles.lampe}>
                <TouchableOpacity onPress={()=>Hint()}>
                    <Image style={styles.progress} source={require('../assets/lampenonalumée.png')} /> 
                    <Image source={require('../assets/light.png')} /> 
                </TouchableOpacity>                   
                </View>       
            )
        }
        else{
            return(
                <View style={styles.lampe}>
                    <Image source={require('../assets/lampenonalumée.png')} /> 
                </View>
            )
        }           
    }

    return(
         <View>
 
                <View style={styles.header}>
                        <View >
                            <Image style={styles.progresimage} source={require('../assets/progres.png')} />          
                            <Image  source={props.progresbar} />          
                        </View>
                    
                        <View style={styles.life}>
                            <Image source={require('../assets/love-02.png')} />
                            {props.score!=-1 && <Text style={{color:"#FF5E43",fontWeight:"bold",fontSize:27}}>{props.score}</Text>}
                            
                            {props.score==-1 && <Text style={{color:"#FF5E43",fontWeight:"bold",fontSize:27}}>{props.score=0 }</Text>}
                             
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
 
                <Imagehint/>
             
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
    progresimage:{
        position:"absolute",  
    },
    life:{
        position:"relative", 
        flexDirection:"row",
        alignItems:"center",
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
        alignItems:"center"
    },
    progress:{
        position:"absolute",
    },
    new:{
        margin:"50%"
    },
    bravo:{
        position:"absolute",  
        top:"auto",
        right:"auto",
    }
   
});
export default Thirdgamecontent;