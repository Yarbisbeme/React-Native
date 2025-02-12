import React from 'react';
import { View, Text, Image } from 'react-native';

const TabIcon = ({ name, color, focused, icon }) => {
  return (
    <View className="flex-1 items-center py-2 gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 20, height: 20 }}
      />
      <Text className={`${focused ? 'font-bold' : 'font-regular'} text-xs color-[${color}]` }>
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;  // Verifica que esté como exportación por defecto
