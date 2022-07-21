import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as AuthProvider } from "./src/context/AuthenticationContext";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import CrosswordScreen from "./src/screens/CrosswordScreen";
import SubTheme from "./src/screens/SubTheme";
import CodeVerif from "./src/screens/CodeVerif";
const navigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Crossword: CrosswordScreen,
    SubTheme: SubTheme,
    Code:CodeVerif
  },
  {
    initialRouteName: "Code",
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
