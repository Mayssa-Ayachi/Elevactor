import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CodeVerif from './src/screens/CodeVerif';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= 'codeVerif'
          component={CodeVerif}
          options= {
            {headerShown:false}
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

