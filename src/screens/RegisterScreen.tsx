import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor={'white'} />

      <View>
        <Text className="font-bold text-black text-3xl">Sign Up</Text>
        <Text>Sign up here</Text>
      </View>
      <View className="flex-1 justify-center">
        <CustomTextInput placeholder="Email Address" keyType="email-address" />
        <CustomTextInput
          placeholder="password"
          keyType="visible-password"
          secure={true}
        />

        <Button label="Sign Up" />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
