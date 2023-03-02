import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import SocialIcon from '../components/SocialIcon';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={'#000000'} />
      <View className="flex-[0.5]">
        <Image
          source={require('../assets/login_img.jpg')}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View className="flex-[0.5]">
        <Text className="text-center text-black text-2xl font-bold">Hello</Text>
        <Text className="text-center">Welcome to Shopinow</Text>

        <View className="mt-5 flex-row justify-center">
          <Button
            onPress={() => navigation.navigate('Sign Up')}
            label="Login"
          />
          <Button
            onPress={() => navigation.navigate('Sign Up')}
            label="Sign Up"
            border={true}
          />
        </View>

        <Text className="text-center mt-5">or via social media account</Text>

        <View className="mt-5 flex-row justify-center flex-1 items-end mb-5">
          <SocialIcon bgColor="green" name="ios-logo-google" />
          <SocialIcon bgColor="blue" name="ios-logo-facebook" />
          <SocialIcon bgColor="red" name="ios-logo-linkedin" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default LoginScreen;
