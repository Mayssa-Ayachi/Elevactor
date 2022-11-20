import { createAppContainer } from "react-navigation";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as AuthProvider } from "./src/context/AuthenticationContext";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SubTheme from "./src/screens/SubTheme";
import CodeVerif from "./src/screens/CodeVerif";
import EleveScreen from "./src/screens/Studentscreen";
import EnseignantScreen from "./src/screens/Enseignantscreen";
import ParentScreen from "./src/screens/Parentscreen";
import StartScreen from "./src/screens/StartScreen";
import LoadingScreen from "./src/screens/loadingscreen2";
import NextScreen from "./src/screens/nextscreen";
import Level1Screen from "./src/screens/level1screen";
import Level2Screen from "./src/screens/level2screen";
import Level4Screen from "./src/screens/level4screen";
import Level5Screen from "./src/screens/level5screen";
import Level6Screen from "./src/screens/level6screen";
import Level7Screen from "./src/screens/level7screen";
import Level8Screen from "./src/screens/level8screen";
import Level9Screen from "./src/screens/level9screen";
import Level10Screen from "./src/screens/level10screen";
import GameScreen from "./src/screens/GameScreen";
import ThemeScreen from "./src/screens/ThemeScreen";
import Language from "./src/screens/Language";
import Thirdgame from "./src/screens/Thirdgame";
import EspaceElevactorScreen from "./src/screens/EspaceElevactorScreen";

import Sudoku from "./src/screens/Sudoku";
import SummaryScreen from "./src/screens/SummaryScreen";
import ParentlangScreen from "./src/screens/parentlang";
import Parentnav from "./src/components/parentnav";
import ChatScreen from "./src/screens/chatscreen";
import { rgbaColor } from "@shopify/react-native-skia";

const StackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();

function ParentFlow() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          shadowColor: "transparent",
          position: "absolute",
          borderRadius: 10000,
          bottom: 10,
          backgroundColor: "transparent",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={require("./assets/tof1.png")} />;
          },
        }}
        name="SummaryScreen"
        component={SummaryScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={require("./assets/tf2.png")} />;
          },
        }}
        name="languageProgress"
        component={ParentlangScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={require("./assets/tof3.png")} />;
          },
        }}
        name="Contacts"
        component={EspaceElevactorScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={require("./assets/tf2.png")} />
            ) : (
              <Image source={require("./assets/tof4.png")} />
            );
          },
        }}
        name="extra"
        component={EnseignantScreen}
      />
    </Tab.Navigator>
  );
}
function MainFlow() {
  return (
    <StackNavigator.Navigator defaultScreenOptions={{ headerShown: false }}>
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="StartScreen"
        component={StartScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Sudoku"
        component={Sudoku}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="ParentFlow"
        component={ParentFlow}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="SubTheme"
        component={SubTheme}
      />

      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Enseignant"
        component={EnseignantScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Parent"
        component={ParentScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Eleve"
        component={EleveScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Loading"
        component={LoadingScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Next"
        component={NextScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level1"
        component={Level1Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level2"
        component={Level2Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level4"
        component={Level4Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level5"
        component={Level5Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level6"
        component={Level6Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level7"
        component={Level7Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level8"
        component={Level8Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level9"
        component={Level9Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="level10"
        component={Level10Screen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Game"
        component={GameScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Language"
        component={Language}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Theme"
        component={ThemeScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Thirdgame"
        component={Thirdgame}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="EspaceElevactor"
        component={EspaceElevactorScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="SummaryScreen"
        component={SummaryScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="parentlang"
        component={ParentlangScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="ChatScreen"
        component={ChatScreen}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Parentnav"
        component={Parentnav}
      />
      <StackNavigator.Screen
        options={{ headerShown: false }}
        name="Code"
        component={CodeVerif}
      />
    </StackNavigator.Navigator>
  );
}

// const navigator = createStackNavigator(
//   {
//     SignIn: SignInScreen,
//     SignUp: SignUpScreen,
//     SubTheme: SubTheme,
//     Code: CodeVerif,
//     StartScreen: StartScreen,
//     Enseignant: EnseignantScreen,
//     Parent: ParentScreen,
//     Eleve: EleveScreen,
//     Loading: LoadingScreen,
//     Next: NextScreen,
//     level1: Level1Screen,
//     level2: Level2Screen,
//     level4: Level4Screen,
//     level5: Level5Screen,
//     level6: Level6Screen,
//     level7: Level7Screen,
//     level8: Level8Screen,
//     level9: Level9Screen,a
//     level10: Level10Screen,
//     Game: GameScreen,
//     Language: Language,
//     Theme: ThemeScreen,

//     Thirdgame: Thirdgame,
//     EspaceElevactor: EspaceElevactorScreen,
//     Sudoku:Sudoku,
//     SummaryScreen: SummaryScreen,
//     parentlang: ParentlangScreen,
//     Parentnav: Parentnav,
//     ChatScreen: ChatScreen,
//   },
//   {
//     initialRouteName: "parentlang",

//     defaultNavigationOptions: {
//       title: "StartScreen",
//       headerShown: false,
//     },
//     defaultNavigationOptions: {
//       title: "Next",
//       headerShown: false,
//     },
//     defaultNavigationOptions: {
//       title: "Loading",
//       headerShown: false,
//     },
//   }
// );

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainFlow />
      </NavigationContainer>
    </AuthProvider>
  );
};
