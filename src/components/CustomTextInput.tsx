import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import React, {useState} from 'react';

const CustomTextInput = ({
  placeholder,
  keyType,
  secure = false,
}: {
  placeholder: string;
  keyType: KeyboardTypeOptions;
  secure?: boolean;
}) => {
  const [value, setValue] = useState();
  return (
    <View className="border-b border-[#EAECEE] mb-2.5">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType={keyType}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default CustomTextInput;
