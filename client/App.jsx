import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EleveScreen from "./src/screens/Studentscreen";
import EnseignantScreen from "./src/screens/Enseignantscreen";
import ParentScreen from "./src/screens/Parentscreen";
import StartScreen from "./src/screens/StartScreen";
import LoadingScreen from "./src/screens/loadingscreen2";
import NextScreen from "./src/screens/nextscreen";
import Level1Screen from "./src/screens/level1screen";
import Level2Screen from "./src/screens/level2screen";
import Level3Screen from "./src/screens/level3screen";
import Level4Screen from "./src/screens/level4screen";
import Level5Screen from "./src/screens/level5screen";
import Level6Screen from "./src/screens/level6screen";
import Level7Screen from "./src/screens/level7screen";
import Level8Screen from "./src/screens/level8screen";
import Level9Screen from "./src/screens/level9screen";
import Level10Screen from "./src/screens/level10screen";

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
        <Stack.Screen name="level1" component={Level1Screen} />
        <Stack.Screen name="level2" component={Level2Screen} />
        <Stack.Screen name="level3" component={Level3Screen} />
        <Stack.Screen name="level4" component={Level4Screen} />
        <Stack.Screen name="level5" component={Level5Screen} />
        <Stack.Screen name="level6" component={Level6Screen} />
        <Stack.Screen name="level7" component={Level7Screen} />
        <Stack.Screen name="level8" component={Level8Screen} />
        <Stack.Screen name="level9" component={Level9Screen} />
        <Stack.Screen name="level10" component={Level10Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}