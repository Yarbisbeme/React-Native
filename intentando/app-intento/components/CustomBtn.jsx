
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({title, handlePress, containerStyles, isLoading, textStyle}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={handlePress}
    className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}
    >
        <Text className={`text-center text-primary font-pbold py-4 text-lg ${textStyle}`}> 
            {title} 
        </Text>
    </TouchableOpacity>
  )
}

export default CustomBtn