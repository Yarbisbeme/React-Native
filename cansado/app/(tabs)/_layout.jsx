
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#1e40af',
                tabBarInactiveTintColor: '#60a5fa',
                tabBarStyle: {
                    height: 80,
                }
            }}
        >
            <Tabs.Screen
                name='calculate'
                options={{
                    headerShown: false,
                    animation: 'shift',
                    tabBarIcon: ({color, focused}) => (
                        <View className='items-center' >
                            <MaterialIcons name='calculate' size={36} color={color} />
                            <Text className={`${focused ? 'font-bold' : 'font-medium'}`} >Calculate</Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name='table'
                options={{
                    headerShown: false,
                    animation: 'shift',
                    tabBarIcon: ({color, focused}) => (
                        <View className='items-center' >
                            <MaterialIcons name='table-view' size={36} color={color} />
                            <Text className={`${focused ? 'font-bold' : 'font-medium'}`} >Table</Text>
                        </View>
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout