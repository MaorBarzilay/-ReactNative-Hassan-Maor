import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigation";



const getFonts = () => Font.loadAsync({
  'newRocker-regular': require('./assets/fonts/NewRocker-Regular.ttf')
});


export default function App() {
  // load the fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppNavigator />
    );}
    else{
      return (
        <AppLoading
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)}
         />
      )
    }
}





