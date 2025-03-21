import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/button'

const privacy = () => {
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
                <Button text="I agree" path=""/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default privacy