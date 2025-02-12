
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, otherStyle, placeholder, value, handleChangeText, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);

    return (


        <View className={`space-y-2 ${otherStyle}`}>
            
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className={`flex-row w-full h-16 border-2 px-4 rounded-2xl mt-2 items-center ${isFocused ? 'border-secondary' : 'border-black-200'} bg-black-100`}>
                <TextInput
                    className="flex-1 text-white font-psemibold text-base w-full text-center items-center"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' ? !showPassword : false}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                {
                    title === "Password" && (
                        <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={!showPassword ? icons.eye : icons.eyeHide}
                                className="w-6 h-6"
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    )
                }

            </View>
            
        </View>
    );
}

export default FormField