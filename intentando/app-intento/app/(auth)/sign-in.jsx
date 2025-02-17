
import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images }from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomBtn'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const SignIn = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const submit = () => {
    
  }

  return (

    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[30px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField 
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyle="mt-7"
            keybordType="email-address"
          />

          <FormField 
            title={"Password"}
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyle="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-8"
            isLoading={isLoading}
          />

          <View className="flex-1 flex-row items-center justify-center pt-5 gap-2">
            <Text className="text-gray-100 font-pregular ">
              Don't have account? 
            </Text>
            <Link href={'/sign-up'} className="text-secondary-200 font-pregular">SignUp</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn