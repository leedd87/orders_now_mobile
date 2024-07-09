import React from 'react';
import { useTheme, Text, Layout, Input, Button } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/MainStackNavigator/MainStackNavigator';

export const RegisterScreen = () => {
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
      <Text category="h1">REGISTER</Text>
      <Layout style={{ gap: 15, padding: 10 }}>
        <Input placeholder="name" autoCapitalize="none" />
        <Input placeholder="surname" autoCapitalize="none" />
        <Input placeholder="email" autoCapitalize="none" />
        <Input placeholder="password" autoCapitalize="none" secureTextEntry />
        <Input
          placeholder="repeat password"
          autoCapitalize="none"
          secureTextEntry
        />

        <Button onPress={() => console.log('Register')}>Register</Button>
        <Layout style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text category="p1">Have account?</Text>
          <Text
            category="p1"
            style={{ textDecorationLine: 'underline' }}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};
