import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { LoginScreen } from '../../screens/Auth/Login/LoginScreen';
import { RegisterScreen } from '../../screens/Auth/Register/RegisterScreen';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const authenticated = false;
  return (
    <Stack.Navigator>
      {authenticated ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
