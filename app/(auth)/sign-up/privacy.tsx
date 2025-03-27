import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/button'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'expo-router'
import api from '@/api/api.config'
import { useState } from 'react'

const privacy = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { matricNumber, fullName, course, gender, role, resetForm } = useAuthStore()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      console.log('Sending request with data:', {
        matricNumber,
        fullName,
        course,
        gender,
        role
      })
      const response = await api.post('/register', {
         matricNumber,
        fullName,
        course,
        gender,
        role
      })
      console.log('Response:', response.data)
      if (response.data) {
        router.push('/(auth)/login')
        resetForm()
      }
    } catch (error: any) {
      console.error('Signup error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: {
          url: error.config?.url,
          baseURL: error.config?.baseURL,
          method: error.config?.method
        }
      })
      // Handle error here
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView className='h-screen bg-studyYellow-100'>
      <View className='mt-10 flex-1 mx-7'>
        <Text className='text-2xl font-Raleway-Medium mb-10'>
          Privacy Notice
        </Text>
        <Text className='font-Raleway-Regular text-base bg-white/20 p-5 '>
          I agree to the terms and conditions of that are provided to me and I choose to follow them, all procedures and no insult and back stab of any kind.
        </Text>
        <View className='absolute bottom-10 w-full'>
          <Button text={loading ? "Submitting..." : "I agree"} onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default privacy