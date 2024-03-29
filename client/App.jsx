import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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

const navigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    SubTheme: SubTheme,
    Code: CodeVerif,
    StartScreen: StartScreen,
    Enseignant: EnseignantScreen,
    Parent: ParentScreen,
    Eleve: EleveScreen,
    Loading: LoadingScreen,
    Next: NextScreen,
    level1: Level1Screen,
    level2: Level2Screen,
    level4: Level4Screen,
    level5: Level5Screen,
    level6: Level6Screen,
    level7: Level7Screen,
    level8: Level8Screen,
    level9: Level9Screen,
    level10: Level10Screen,
    Game: GameScreen,
    Language: Language,
    Theme: ThemeScreen,

    Thirdgame: Thirdgame,
    EspaceElevactor: EspaceElevactorScreen,
    Sudoku:Sudoku,
    SummaryScreen: SummaryScreen,
    parentlang: ParentlangScreen,
    Parentnav: Parentnav,
    ChatScreen: ChatScreen,
  },
  {
    initialRouteName: "parentlang",

    defaultNavigationOptions: {
      title: "StartScreen",
      headerShown: false,
    },
    defaultNavigationOptions: {
      title: "Next",
      headerShown: false,
    },
    defaultNavigationOptions: {
      title: "Loading",
      headerShown: false,
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
