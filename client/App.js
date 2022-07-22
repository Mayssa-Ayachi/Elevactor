import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as AuthProvider } from "./src/context/AuthenticationContext";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import CrosswordScreen from "./src/screens/CrosswordScreen";
import SubTheme from "./src/screens/SubTheme";
import CodeVerif from "./src/screens/CodeVerif";
import EleveScreen from "./src/screens/Studentscreen";
import EnseignantScreen from "./src/screens/Enseignantscreen";
import ParentScreen from "./src/screens/Parentscreen";
import StartScreen from "./src/screens/StartScreen";
import LoadingScreen from "./src/screens/loadingscreen2";
import NextScreen from "./src/screens/nextscreen"
const navigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Crossword: CrosswordScreen,
    SubTheme: SubTheme,
    Code: CodeVerif,
    StartScreen:StartScreen,
    EnseignantScreen:EnseignantScreen,
    ParentScreen:ParentScreen,
    EleveScreen:EleveScreen,
    LoadingScreen:LoadingScreen,
    NextScreen:NextScreen,
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      title: "SignIn",
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
