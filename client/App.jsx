import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EleveScreen from "./assets/screens/Studentscreen";
import EnseignantScreen from "./assets/screens/Enseignantscreen";
import ParentScreen from "./assets/screens/Parentscreen";
import StartScreen from "./assets/screens/StartScreen";
import LoadingScreen from "./assets/screens/loadingscreen2";
import NextScreen from "./assets/screens/nextscreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Enseignant" component={EnseignantScreen} />
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen name="Eleve" component={EleveScreen} />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Next"
          component={NextScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}