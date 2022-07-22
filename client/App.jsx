import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EleveScreen from "./src/screens/Studentscreen";
import EnseignantScreen from "./src/screens/Enseignantscreen";
import ParentScreen from "./src/screens/Parentscreen";
import StartScreen from "./src/screens/StartScreen";
import LoadingScreen from "./src/screens/loadingscreen2";
import NextScreen from "./src/screens/nextscreen"

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