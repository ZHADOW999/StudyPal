import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const Button = ({text, onPress }: {text: string,onPress?:()=> void}) => {
    const router = useRouter();
  return (
  
        
      <TouchableOpacity onPress={onPress}  className='flex justify-center items-center h-16 rounded-full   text-white bg-studyBlack-300'>
        <Text className='text-white'>{text}</Text>
      </TouchableOpacity>
    
  )
}

export default Button