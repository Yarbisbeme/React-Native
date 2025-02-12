import { Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import  { images } from '../constants';
import CustomBtn from '../components/CustomBtn'

export default function Index() {  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-2xl text-white font-pbold text-center'>
              Discover Endless Possibilities Whith {' '}
              <Text className='color-secondary-100'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='absolute w-[136px] h-[15px] -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
              Where creativity meets innovation: Embark on journey of limitless exploration Aora
          </Text>

          <CustomBtn 
            title={'Continue with Email'}
            handlePress={() => router.push('/sign-in')}
            containerStyles={'mt-7 w-full'}
          />


        </View>
      </ScrollView>
      
      <StatusBar
        backgroundColor='#161622'
        style='inverted'
      />

    </SafeAreaView>
  );
}


