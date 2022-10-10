import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SummaryScreen from "./SummaryScreen";
import { View } from "react-native";
const Tab = createMaterialBottomTabNavigator();

export default function ParentScreen(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='SummaryScreen' component={SummaryScreen}/>
            <Tab.Screen name='languageProgress' component={<View>languages</View>}/>
            <Tab.Screen name='Contacts' component={<View>Contacts</View>}/>
            
        </Tab.Navigator>)
}