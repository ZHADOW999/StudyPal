import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/button';
import icons from '@/constants/icons';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'expo-router';

const role = () => {
    const { role, setRole } = useAuthStore();
    const [error, setError] = useState<string | undefined>()
    const router = useRouter()

    const handleNext = () => {
        if (!role) {
            setError('Please select a role')
            return
        }
        setError(undefined)
        router.push('/(auth)/sign-up/privacy')
    }

    return (
        <SafeAreaView className="bg-studyYellow-100 h-screen px-7">
            <View className='mt-10'>      <ProgressBar currentStep={4} totalSteps={4} /></View>
            <View className="flex-1 mt-7">
                <Text className="text-studyBlack-300 font-semibold text-[24px] font-Raleway-Medium">
                    Choose a mode to get started
                </Text>
                <Text className="font-Raleway-Regular  text-base">
                    StudyWith’s for making all kinds of connections! To help you excel in you studies and also learn to create value.
                </Text>
                <TouchableOpacity
                    style={styles.shadowBox}
                    onPress={() => setRole('Growing')}
                    className="gap-5 bg-white px-3 py-4 rounded-lg flex flex-row justify-between items-center mt-10"
                >
                    <View>
                        <Text className='font-Raleway-Bold text-2xl'>Growing</Text>
                        <Text className='font-Raleway-Regular'>
                            I need help to excel in my studies
                        </Text>
                    </View>
                    <View
                        style={{ shadowRadius: 2, }}
                        className={` ${role === 'Growing' ? ' bg-studyYellow-100 rounded-full size-7 flex justify-center items-center' : 'flex bg-white justify-center items-center border-black border-2  rounded-full p-[9px]'
                            }`}
                    >
                        {role === 'Growing' && (<Icon className=' flex justify-center items-center' name='check' color='#ffffff' size={15} />)}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.shadowBox}
                    onPress={() => setRole('Elite')}
                    className="gap-5 bg-white px-3 py-4 rounded-lg flex flex-row justify-between items-center mt-6"
                >
                    <View >
                        <Text className='font-Raleway-Bold text-2xl'>Elite</Text>
                        <Text className='font-Raleway-Regular'>I want to help other student to excel</Text>
                    </View>
                    <View

                        className={` ${role === 'Elite' ? ' bg-studyYellow-100 rounded-full size-7 flex justify-center items-center' : 'flex bg-white justify-center items-center border-black border-2  rounded-full p-[9px]'
                            }`}
                    >
                        {role === 'Elite' && (<Icon className='flex justify-center items-center' name='check' color='#ffffff' size={15} />)}
                    </View>
                </TouchableOpacity>

                <View >
                    <Text className='text-red-500 text-sm mt-1'> {error}</Text>
                </View>


                <View className='absolute bottom-10 w-full'>
                    <Button text='Next' onPress={handleNext} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadowBox: {
        shadowColor: '#0a0a0a',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0,

        // Android Shadow
        elevation: 5,
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    }
})

export default role