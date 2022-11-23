import React from 'react';
import {Image,StyleSheet,ImageBackground} from 'react-native';
import TouchableImage from '../components/TouchableImage';

const Language = ({navigation}) => {
  return (
        <ImageBackground 
        source={require("../assets/background.png")} 
        resizeMode="cover" style={styles.image}
         >
            <Image source={require("../assets/ele.png")} style={styles.pic} />
            <TouchableImage source={require("../assets/ar.png")} style={styles.pic}
                navigate={()=>navigation.navigate("Theme",{pre:"اللغات",deu:"التطوير",troi:"العلوم",qua:"الفن",fr:false})} />
            <TouchableImage source={require("../assets/fr.png")} style={styles.pic}
                navigate={()=>navigation.navigate("Theme",{pre:"Langue",deu:"Developpement",troi:"Science",qua:"Art",fr:true})} />
        </ImageBackground>
  )
};

const styles = StyleSheet.create({
  pic :{
    marginTop:"4%"
},
    image: {
    flex: 1,
    justifyContent: "center",
    width: '100%', height: '100%',
    alignItems:"center"
  },
});

export default Language;