import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const Button = ({text, path}: {text: string, path: string}) => {
    const router = useRouter();
  return (
  
        
      <TouchableOpacity  onPress={//@ts-ignore
        ()=> router.push(path)} className='flex justify-center items-center h-16 rounded-full   text-white bg-studyBlack-300'>
        <Text className='text-white'>{text}</Text>
      </TouchableOpacity>
    
  )
}

export default Button