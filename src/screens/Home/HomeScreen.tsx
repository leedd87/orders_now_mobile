import React from 'react';
import { Layout, Text, useTheme } from '@ui-kitten/components';

export const HomeScreen = () => {
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
      <Text category="h1">HOME</Text>
    </Layout>
  );
};
