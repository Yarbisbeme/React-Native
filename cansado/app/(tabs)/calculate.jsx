
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, TextInput } from 'react-native-web'

const calculate = () => {

    const [numbers, setNumbers] = useState({
        num1: '',
        num2: '',
        num3: '',
    })

    const [results, setResults] = useState({
        min: '',
        max: '',
        avg: '',    
    })

    useEffect(() => {
        const values = Object.values(numbers)
            .map(num => Number(num))
            .filter(num => !isNaN(num))

            if (values.length > 0) {
            
                setResults({
                    min: Math.min(...values),
                    max: Math.max(...values),
                    avg: values.reduce((a, b) => a+b, 0) / values.length
                })
            
            } else {
                setResults({
                    min: 0, max: 0, avg: 0,
                })
            }
    }, [numbers])

    return (
        <SafeAreaView className='w-full h-full'>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='flex-1 justify-center items-center space-y-4 mx-8'>
                    <Text className='text-blue-800 font-black text-4xl' > Calculadora </Text>
                    {
                        ['num1', 'num2', 'num3'].map((key, index) => (
                            <TextInput
                                key={index}
                                placeholder={`Introduce el ${index + 1} numero`}
                                onChangeText={(value) => setNumbers( (prev) => ({...prev, [key]: value}) )}
                                className='w-full border-2 border-gray-700 h-14 text-base font-medium text-center rounded-xl'
                                keyboardType='numeric'
                            />
                        ))
                    }
                    <Text className='text-lg font-bold text-center' >Mayor: {results.max}, Menor: {results.min}, Promedio: {results.avg} </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default calculate