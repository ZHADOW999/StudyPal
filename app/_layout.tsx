// import { SplashScreen, Stack } from "expo-router";
// import "./global.css";
// import {useFonts} from 'expo-font';
// import React,{ useEffect } from "react";
// import NavigationListener from "@/lib/NavigationListener";

// export default function RootLayout() {
//   const [fontLoaded]= useFonts ({
//     "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
//     "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
//     "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
//   })

//   useEffect(()=>{
//     if(fontLoaded){
//       SplashScreen.hideAsync()
//     }
//   },[fontLoaded])

//   if(!fontLoaded) return null
//   return (
//  <>
//       <NavigationListener/>
//     <Stack screenOptions={{headerShown:false}}/>
//  </>
// );
// }
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import "./global.css";
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import emitter from '@/lib/NavigationEmmiter';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { isAuthenticated, setAuthenticated } = useAuthStore();
  const [isReady, setIsReady] = useState(false);
  const [fontLoaded] = useFonts({
    "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setAuthenticated(!!token);
      } catch (error) {
        console.error('Auth check error:', error);
        setAuthenticated(false);
      } finally {
        setIsReady(true);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isReady || !fontLoaded) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';

    if (!isAuthenticated && !inAuthGroup) {
      requestAnimationFrame(() => {
        router.replace('/(auth)/sign-up/sign-up');
      });
    } else if (isAuthenticated && inAuthGroup) {
      requestAnimationFrame(() => {
        router.replace('/');
      });
    }
  }, [isReady, isAuthenticated, segments, fontLoaded]);

  useEffect(() => {
    const handleNavigateSignUp = () => {
      router.replace('/(auth)/sign-up/sign-up');
    };

    emitter.on('navigateSignUp', handleNavigateSignUp);

    return () => {
      emitter.off('navigateSignUp', handleNavigateSignUp);
    };
  }, []);

  if (!fontLoaded || !isReady) return null;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}