
import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native-web'
import { Link } from 'expo-router'

const index = () => {
    return (
        <SafeAreaView className='w-full h-full bg-slate-500'>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='bg-white flex-1 justify-center items-center my-4 mx-6 rounded-xl' >
                    <Image
                        source={require('../assets/images/yarbis.jpg')}
                        style={{width:300, height: 400}}
                        resizeMode='cover'
                        className='rounded-full mb-4'
                    />
                    <Text className='text-blue-800 text-3xl font-black' > Yarbis Beltre Mercedes </Text>
                    <TouchableOpacity>
                        <Link href={'/calculate'} className='text-blue-400 text-3xl font-black' > Go to App </Link>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

//This is Yarbis Beltre Matricula 2022-0907