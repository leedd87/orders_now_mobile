import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { default as theme } from './src/theme/theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/MainStackNavigator/MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}

export default App;
