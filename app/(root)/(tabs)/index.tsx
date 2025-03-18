import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex justify-center items-center h-full">

    
      <Link href="/sign-up" className="">Signup</Link>

    </View>
  );
}
