import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ThemeScreen from "./src/screens/ThemeScreen";
import GameScreen from "./src/screens/GameScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Theme:ThemeScreen,
    Game:GameScreen
  },
  {
    initialRouteName: "Game",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
