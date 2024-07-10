import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/Auth/Login/LoginScreen';
import { RegisterScreen } from '../../screens/Auth/Register/RegisterScreen';
import { TabBarNavigator } from '../TabBarNavigator/TabBarNavigator';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  TabBarNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const authenticated = true;
  return (
    <Stack.Navigator>
      {authenticated ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabBarNavigator" component={TabBarNavigator} />
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
