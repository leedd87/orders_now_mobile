import React from 'react';
import { useTheme, Text, Layout } from '@ui-kitten/components';

export const LoginScreen = () => {
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
      <Text category="h1">LOGIN</Text>
    </Layout>
  );
};
