import React from "react";
import { View , StyleSheet} from "react-native";
import Head from "../components/Head";
import Input from "../components/Input";
export default function CodeVerif(props){

    
    return (
        <View style={styles.container}>
            <Head />
            <Input navigation={props.navigation} />
        </View>
    )
}

const styles= StyleSheet.create({
    container : {
        flex: 1,
        paddingTop:'25%',
        paddingLeft:'5%',
        paddingRight:'5%',
    }
})