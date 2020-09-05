import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import Route from './src/route';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#000" translucent={true} />
      <Route />
    </>
  );
}
