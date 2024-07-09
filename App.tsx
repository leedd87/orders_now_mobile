import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { HomeScreen } from './src/screens/Home/HomeScreen';
import { default as theme } from './src/theme/theme.json'; // <-- Import app theme

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <HomeScreen />
  </ApplicationProvider>
);
