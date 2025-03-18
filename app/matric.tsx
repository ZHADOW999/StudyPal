import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import { useRouter } from 'expo-router'
import Button from '@/components/button'
import Icon from 'react-native-vector-icons/FontAwesome6';

const Matric = () => {

  const router = useRouter()
  return (
    <SafeAreaView className='bg-studyYellow-100 h-full px-7'>
      <TouchableOpacity onPress={()=> router.back()} className='mt-10'>

        < Icon name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <View className='flex-1 mt-5'>
        <Text className='text-studyBlack-300 font-semibold text-[24px] font-Raleway-Medium'>
          What’s your matric number?
        </Text>
        <Text className='font-Raleway-Regular  text-base'>
          We protect our community by making sure everyone on StudyPal an OAU student.
        </Text>

        <TextInput
          placeholder='Enter your Student ID'
          className='shadow-black bg-white mt-10 font-Raleway-Regular text-base pl-4 py-3 rounded-lg'
        />
        <View className='flex gap-2 flex-row' >
          <Text className=' font-Raleway-Bold mt-3'>
            Already have an account?

          </Text>
          <TouchableOpacity className=''> 
            <Text className='text-studyBlack-300 font-extrabold mt-3'>Sign in</Text>
            </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={()=> router.push('/fullName')} className='absolute bottom-10 w-full  flex justify-center items-center h-16 rounded-full   text-white bg-studyBlack-300'>
          <Text className='text-white'> Next</Text>
        </TouchableOpacity> */}
        <View className='absolute bottom-10 w-full'>
          <Button text={'Next'} path='/fullName' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Matric