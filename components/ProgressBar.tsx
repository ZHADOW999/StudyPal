import type React from "react"
import { View, Text } from "react-native"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  showPercentage?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, showPercentage = false }) => {
  // Calculate progress percentage
  const progress = (currentStep / totalSteps) * 100

  return (
    <View className="my-4">
      <View className="h-2 bg-studyYellow-300 overflow-hidden">
        <View className="h-full bg-black " style={{ width: `${progress}%` }} />
      </View>

      {showPercentage && <Text className="mt-1 text-xs text-gray-500 text-right">{Math.round(progress)}%</Text>}
    </View>
  )
}

export default ProgressBar

