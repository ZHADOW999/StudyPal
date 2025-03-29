import Card from "@/components/card";
import images from "@/constants/images";
import { Link } from "expo-router";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Octicons';
import { LogBox } from "react-native";

LogBox.ignoreLogs(['Warning: Text strings must be rendered within a <Text> component.']);
import { useFetch } from "@/hooks/useFetch";

export default function Index() {
  const { data: studyPalData } = useFetch("/user/info");
  return (
    <SafeAreaView className="" edges={['top']}>
      <ScrollView contentContainerClassName="m-7">
        <View className="flex flex-row justify-between">
          <View className="w-[70%]">
            <View className="flex flex-row gap-3 items-center">
              <View className=" bg-blue-700 rounded-full size-10 flex justify-center items-center">
                <Text className="text-xl text-white">V</Text>
              </View>
              <Text className="font-Raleway-Medium text-xl">Good day {studyPalData?.fullName} </Text>
            </View>
            <Text className="font-Raleway-Regular text-sm">Here some of the ways you can find help to grow in your studies</Text>
          </View>
          <View><Icon name="bell-fill" size={25} /></View>
        </View>

        <View className="mt-12 ">
          <Card bgColor="#D9C7E7" header="StudyPal" text="Make friends to study with" image={images.music} imageSize={130} />
          <Card bgColor="#FF9A62" header="Mentorship" text="Get into the mentorship program" image={images.mentorship} imageSize={130} />
          <Card header="Extra class" text="Courses are being broken down to your understanding " bgColor='#85C7EE' image={images.clock} imageSize={130} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

