import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const chat = () => {

  const router = useRouter();
  return (
    <View>
      <Text>chat</Text>
      <Button title="back" onPress={() => router.push('/')} />
    </View>
  )
}

export default chat