import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import Button from '@/components/button'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { useAuthStore } from '@/store/authStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@/api/api.config'

const Login = () => {
  const router = useRouter()
  const { setAuthenticated,setIsLoading } = useAuthStore()
  const [studentId, setStudentId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    if (!studentId) {
      setError('Please enter your Student ID')
      return
    }

    try {
      setLoading(true)
      const response = await api.post('/login', {
        matricNumber: studentId
      })

      if (response.data?.access_token) {
        await AsyncStorage.setItem('authToken', response.data.access_token)
        if (response.data.refresh_token) {
          await AsyncStorage.setItem('refreshToken', response.data.refresh_token)
        }
        setAuthenticated(true)
        setIsLoading(false)
        router.push('/')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Invalid Student ID')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='bg-studyYellow-100 h-full px-7'>
      <TouchableOpacity onPress={() => router.back()} className='mt-10'>
        <Icon name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <View className='flex-1 mt-5'>
        <Text className='text-studyBlack-300 font-semibold text-2xl font-Raleway-Medium'>
          Login
        </Text>
        <Text className='font-Raleway-Regular text-base'>
          Just your student ID is needed.
        </Text>

        <TextInput
          placeholder='Enter your Student ID'
          className='shadow-black bg-white mt-10 font-Raleway-Regular text-base pl-4 py-3 rounded-lg'
          value={studentId}
          onChangeText={setStudentId}
        />
        {error ? (
          <Text className='text-red-500 text-sm mt-1'>{error}</Text>
        ) : null}
        <View className='flex gap-2 flex-row'>
          <Text className='font-Raleway-Bold mt-3'>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/sign-up/matric')}>
            <Text className='text-studyBlack-300 font-extrabold mt-3'>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View className='absolute bottom-10 w-full'>
          <Button 
            text={loading ? 'Logging in...' : 'Login'} 
            onPress={handleLogin}
          />
        </View>
      </View>
    </View>
  )
}

export default Login