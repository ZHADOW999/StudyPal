import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Button from '@/components/button'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const Signup = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <ScrollView>
                <View className='bg-studyYellow-100 h-screen'>
                    <Image className='-mt-28 w-[90%] flex justify-self-end self-end' resizeMode='contain' width={100} height={100} source={images.signupImage} />
                    <View className='mx-7'>
                        <Text className=' text-xl font-Raleway-Medium'>Welcome to</Text>
                        <Text className='font-Raleway-Medium text-5xl'>StudyPal</Text>
                        <View className='mt-20'>
                            <TouchableOpacity onPress={() => router.push('/(auth)/sign-up/matric')} className='flex justify-center items-center h-16 rounded-full   text-white bg-studyBlack-300'>
                                <Text className='text-white'> Create an account</Text>

                            </TouchableOpacity>
                            {/* <Button text='Create an account' onPress={() => router.push('/matric')} /> */}
                            <TouchableOpacity onPress={()=> router.push('/(auth)/login')} className='flex justify-center items-center h-16 rounded-full mt-4 border border-studyBlack-300'>
                                <Text className='text-studyBlack-300'> Log in</Text>
                            </TouchableOpacity>
                        </View >
                    </View>
                </View>

            </ScrollView> 
        </SafeAreaView>
    )
}

export default Signup