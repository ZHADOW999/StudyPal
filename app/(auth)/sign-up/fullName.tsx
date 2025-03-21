import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/button";

const fullName = () => {
    return (
        <SafeAreaView className="h-screen bg-studyYellow-100 px-7">
            <View className="mt-10">
                <ProgressBar currentStep={1} totalSteps={4} />
            </View>
            <View className="flex-1 mt-7">
                <Text className="text-studyBlack-300 font-semibold text-[24px] font-Raleway-Medium">
                    What's your fullname?
                </Text>
                <Text className="font-Raleway-Regular  text-base">
                    Add the name you are called in school
                </Text>
                <TextInput
                    style={styles.shadowBox}
                    placeholder="Enter your Full Name"
                    className="shadow-black bg-white mt-10 font-Raleway-Regular text-base pl-4 py-3 rounded-lg"
                />
                <View className="absolute bottom-10 w-full">
                    <Button text="Next" path={"/(auth)/sign-up/studying"} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shadowBox: {
        shadowColor: "#0a0a0a",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 0,

        // Android Shadow
        elevation: 5,
    },
});

export default fullName;
