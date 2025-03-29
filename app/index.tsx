import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore';
import { useFetch } from '@/hooks/useFetch';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    const { isAuthenticated,isLoading } = useAuthStore()
    const { data: studyPalData } = useFetch("/user/info");

    useEffect(() => {
        if (!isLoading && isAuthenticated && studyPalData) {
            if (studyPalData.role === "Growing") {
                router.replace('/(root)/(Grow)');
            } else if (studyPalData.role === "Elite") {
                router.replace('/(root)/(Elite)');
            }
        }
    }, [isLoading, isAuthenticated, studyPalData]);
  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size='large' color="#FFD233"/>
    </View>
  )
}

export default index