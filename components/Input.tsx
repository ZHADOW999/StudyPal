import type React from "react"
import { View, TextInput, Text } from "react-native"
import type { TextInputProps } from "react-native"

interface InputProps extends TextInputProps {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <View className="mb-4 w-full">
      <Text className="text-base mb-2 font-medium text-gray-700">{label}</Text>
      <TextInput
        className={`border rounded-lg p-3 text-base bg-white ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error ? <Text className="text-red-500 text-sm mt-1">{error}</Text> : null}
    </View>
  )
}

export default Input

