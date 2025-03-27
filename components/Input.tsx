import type React from "react"
import { View, TextInput, Text } from "react-native"
import type { TextInputProps } from "react-native"

interface InputProps extends TextInputProps {
  
  error?: string
}

const Input: React.FC<InputProps> = ({error, className, ...props }) => {
  return (
    <View className="mb-4 w-full">
      <TextInput
        className={`shadow-black bg-white mt-10 font-Raleway-Regular text-base pl-4 py-3 rounded-lg ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error ? <Text className="text-red-500 text-sm mt-1">{error}</Text> : null}
    </View>
  )
}

export default Input

