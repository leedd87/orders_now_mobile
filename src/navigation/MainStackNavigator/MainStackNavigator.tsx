//TODO
//Auth => Stack.Group
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { LoginScreen } from '../../screens/Auth/Login/LoginScreen';
import { RegisterScreen } from '../../screens/Auth/Register/RegisterScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  const authenticated = false;
  return (
    <Stack.Navigator>
      {authenticated ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registerj" component={RegisterScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
