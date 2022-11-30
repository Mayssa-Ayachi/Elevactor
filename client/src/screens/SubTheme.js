import React from "react";
import { FlatList } from "react-native";
import LangCard from "../components/LangCard";
import NavBar from "../components/NavBar";
import { StyleSheet } from "react-native";

const DATA = [
    {
      id: '1',
      title: 'Français',
      image :require('../../assets/french.png'),
      colorIn:'#FFB0C3',
      colorOut:'#FB7595'
      
    },
    {
      id: '2',
      title: 'Arabe',
      image : require('../../assets/arabic.png'),
      colorIn :'#6AF8BE',
      colorOut :'#00D27D'
    },
    
  ];


export default function SubTheme(props){
    const renderItem = ({item}) => {
        return <LangCard 
        navigation={props.navigation}
        title ={item.title}
        color ={{ backgroundColor: item.colorIn}}
        image = {item.image} 
        border ={{borderColor : item.colorOut}}
        />
    }
    return (
        <>
        <NavBar />
        <FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle = {styles.container}
      />
      </>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
        justifyContent:'center'
    }
})



