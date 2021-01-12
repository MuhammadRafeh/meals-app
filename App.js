import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {

  const [ isLoadedFonts ] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!isLoadedFonts) {
    return <AppLoading />
  }

  return (
    <MealsNavigator/>
  );
}
