
import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import "../../global.css"
import TabIcon from '../../components/icon';  // Correcto si es una exportación por defecto

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={
          {tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
              backgroundColor: '#161622',
              borderTopWidth: '1',
              borderTopColor: '#232533',
              height: 84,
            }
          }
        }
      >
        <Tabs.Screen name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={"Home"}
                color={color}
                focused={focused}
                icon={icons.home}
              />
            )
          }}
        />
        <Tabs.Screen name='bookMark'
          options={{
            title: "BookMark",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={"BookMark"}
                color={color}
                focused={focused}
                icon={icons.bookmark}
              />
            )
          }}
        />
        <Tabs.Screen name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={"Create"}
                color={color}
                focused={focused}
                icon={icons.plus}
              />
            )
          }}
        />
        <Tabs.Screen name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                name={"Profile"}
                color={color}
                focused={focused}
                icon={icons.profile}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout