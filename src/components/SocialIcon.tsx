import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const SocialIcon = ({name, bgColor}: {name: string; bgColor: string}) => {
  return (
    <TouchableOpacity
      className={`w-12 h-12 justify-center items-center rounded-3xl mx-3`}
      style={{backgroundColor: bgColor}}>
      <Ionicon name={name} size={20} color="white" />
    </TouchableOpacity>
  );
};

export default SocialIcon;

// &
