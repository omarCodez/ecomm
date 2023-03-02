import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  label,
  border,
  onPress,
}: {
  label: string;
  border?: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className={
        border
          ? 'bg-white p-3 rounded-3xl w-[120] ml-3 border border-black'
          : 'bg-[#033ef6] p-3 rounded-3xl w-[120] ml-3'
      }>
      <Text
        className={
          border
            ? 'text-black text-center font-bold'
            : 'text-white text-center font-bold'
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
