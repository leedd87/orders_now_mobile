import React from 'react';
import { Layout, useTheme, Text, Button } from '@ui-kitten/components';

export const AccountScreen = () => {
  const theme = useTheme();
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme['color-primary-600'],
      }}
    >
      <Text category="h1">Account</Text>
      <Button onPress={() => console.log('Log Out')}>Log out</Button>
    </Layout>
  );
};
