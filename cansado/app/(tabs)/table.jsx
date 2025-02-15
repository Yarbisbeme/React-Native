import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, TextInput } from 'react-native-web'

const table = () => {

    const [number, setNumber] = useState('')
    const [table, setTable] = useState([])

    const generateTable = (number) => {
        setNumber(number)
        const num = Number(number)
        
        const newTable = []
        for (let index = 1; index <= 14; index++) {
            newTable.push(index * num)
        }
        setTable(newTable);
    }//This is Yarbis Beltre Matricula 2022-0907

    return (
        <SafeAreaView className='w-full h-full bg-slate-400'>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='flex-1 justify-center items-center space-y-4 m-4 bg-white rounded-xl p-4'>
                    <Text className='text-3xl font-black text-blue-800'>Table</Text>
                        <TextInput
                            className='h-14 w-4/5 rounded-xl border-2 border-gray-800 font-medium text-lg text-center'
                            placeholder='Ingrese un numero'
                            value={number}
                            onChangeText={generateTable}
                            keyboardType='numeric'
                        />
                        {
                            table.length > 0 && 
                                <FlatList
                                    data={table}
                                    renderItem={({item, index}) => (
                                            <Text className='text-lg font-medium mx-4'>{index + 1} x {number} = {item}</Text>
                                    )}
                                />
                        }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default table