import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressBar from '@/components/ProgressBar'
import Button from '@/components/button'


const Studying = () => {
  return (
    <SafeAreaView className='h-screen bg-studyYellow-100 px-7'>
      <View className='mt-10'>   
          <ProgressBar currentStep={2} totalSteps={4} />
      </View>
      <View className='flex-1 mt-7'>
        <Text className='text-studyBlack-300 font-semibold text-[24px] font-Raleway-Medium'>What are you currently studying ?</Text>
        <TextInput
          style={styles.shadowBox}
          placeholder='e.g Computer Science with Economics'
          className='placeholder-shown:text-white shadow-black shadow-2xl bg-white mt-10 font-Raleway-Regular text-base pl-4 py-3 rounded-lg'
        />
        <View className='absolute bottom-10 w-full'><Button text='Next' path={'/gender'} /></View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#0a0a0a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,

    // Android Shadow
    elevation: 5,
  }
})

export default Studying