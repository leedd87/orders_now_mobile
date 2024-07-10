import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, AccountScreen } from '../../screens';

const Tab = createBottomTabNavigator();

export const TabBarNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AccountScreen} />
    </Tab.Navigator>
  );
};
