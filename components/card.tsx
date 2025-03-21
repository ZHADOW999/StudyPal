import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ header, text, image, bgColor, imageSize }: { header: string, text: string, image: any, bgColor: any, imageSize: Number }) => {
  return (
    <View style={{ 
      backgroundColor: bgColor,
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 20 }, // Shadow offset
      shadowOpacity: 0.1, // Shadow opacity
      shadowRadius: 10, // Shadow radius
      elevation: 4, // For Android shadow

     }} className="h-auto p-3 flex flex-row mb-5 rounded-lg justify-between ">
      <View className='w-[50%]'>
        <Text className='mt-5 font-Raleway-SemiBold text-lg'>{header}</Text>
        <Text className='font-Raleway-Regular text-sm w-[]'>{text}</Text>
      </View>
      <View>      <Image style={{ width: Number(imageSize), height: Number(imageSize) }} resizeMode='contain' source={image} /></View>
    </View>
  )
}

export default Card