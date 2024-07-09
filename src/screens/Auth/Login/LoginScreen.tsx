import React from 'react';
import { useTheme, Text, Layout, Button, Input } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/MainStackNavigator/MainStackNavigator';

export const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme['color-primary-600'],
        paddingHorizontal: 30,
      }}
    >
      <Text category="h1">LOGIN</Text>
      <Layout style={{ gap: 15, padding: 10 }}>
        <Input placeholder="email" autoCapitalize="none" />
        <Input placeholder="password" autoCapitalize="none" secureTextEntry />
        <Button>Login</Button>
        <Button onPress={() => navigation.navigate('Register')}>
          Register
        </Button>
      </Layout>
    </Layout>
  );
};
