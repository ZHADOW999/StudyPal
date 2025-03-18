import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/button';
import icons from '@/constants/icons';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Gender = () => {
  const [gender, setGender] = useState('');
  const [genderSelected, setGenderSelected] = useState('');

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    setGenderSelected(selectedGender);
  };

  return (
    <SafeAreaView className="bg-studyYellow-100 h-screen px-7">
      <View className='mt-10'>      <ProgressBar currentStep={3} totalSteps={4}  /></View>
      <View className="flex-1 mt-7">
        <Text className="text-studyBlack-300 font-semibold text-[24px] font-Raleway-Medium">
          How do you identify?
        </Text>

        <TouchableOpacity
          style={styles.shadowBox}
          onPress={() => handleGenderSelect('Male')}
          className="gap-5 bg-white px-3 py-4 rounded-lg flex flex-row justify-between items-center mt-10"
        >
          <Text>Male</Text>
          <View
            style={{ shadowRadius: 2, }}
            className={` ${genderSelected === 'Male' ? ' bg-studyYellow-100 rounded-full size-7 flex justify-center items-center' : 'flex bg-white justify-center items-center border-black border-2  rounded-full p-[9px]'
              }`}
          >
            {genderSelected === 'Male' && (<Icon className=' flex justify-center items-center' name='check' color='#ffffff' size={15} />)}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.shadowBox}
          onPress={() => handleGenderSelect('Female')}
          className="gap-5 bg-white px-3 py-4 rounded-lg flex flex-row justify-between items-center mt-6"
        >
          <Text>Female</Text>
          <View

            className={` ${genderSelected === 'Female' ? ' bg-studyYellow-100 rounded-full size-7 flex justify-center items-center ' : 'flex bg-white justify-center items-center border-black border-2  rounded-full p-[9px]'
              }`}
          >
            {genderSelected === 'Female' && (<Icon className='flex justify-center items-center' name='check' color='#ffffff' size={15} />)}
          </View>
        </TouchableOpacity>

        <View className='absolute bottom-10 w-full'>
          <Button text='Next' path={'/role'} />
        </View>
      </View>
    </SafeAreaView>
  );
};


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

export default Gender;