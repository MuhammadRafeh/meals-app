import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import store from './redux/store';

enableScreens();

export default function App() {

  const [isLoadedFonts] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!isLoadedFonts) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
