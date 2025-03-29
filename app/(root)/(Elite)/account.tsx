import { View, Text, Button } from 'react-native'
import React from 'react'
import api from '@/api/api.config'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const account = () => {
  const {isAuthenticated, setAuthenticated} = useAuthStore()
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      
      // If we have a refresh token, try to blacklist it
      if (refreshToken) {
        try {
          await api.post('/logout', {
            refresh_token: refreshToken
          });
        } catch (error) {
          console.error('Error blacklisting token:', error);
        }
      }
      
      // Clear tokens from storage
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('refreshToken');
      
      // Update auth state and redirect
      setAuthenticated(false);
      router.push('/sign-up/sign-up');
    } catch (error) {
      console.error('Logout Error', error);
      alert('An error occurred while logging out. Please try again.');
    }
  };

  return (
    <View>
      <Text>account</Text>
      <Button title='logout' onPress={handleLogout}/>
    </View>
  )
}

export default account