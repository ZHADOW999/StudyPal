import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import {useFonts} from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {
  const [fontLoaded]= useFonts ({
    "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
  })

  useEffect(()=>{
    if(fontLoaded){
      SplashScreen.hideAsync()
    }
  },[fontLoaded])

  if(!fontLoaded) return null
  return <Stack screenOptions={{headerShown:false}}/>;
}
