import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './src/theme/theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/MainStackNavigator/MainStackNavigator';

function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
