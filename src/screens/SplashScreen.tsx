import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);
  
  return (
    <ImageBackground
      source={require('../assets/splash_screen.jpg')}
      resizeMode={'cover'}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <Text className="text-white font-bold text-3xl">Shopinow</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
