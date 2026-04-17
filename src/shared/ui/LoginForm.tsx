import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../theme/LoginStyle';
import { THEME } from '../../constants/Theme';


export type LoginFormProps = {
    name: string,
    phone: string,
    onChangeName: (text: string) => void,
    onChangePhone: (text: string) => void,
    onSubmit: () => void,
}

export const LoginForm = ({
  name,
  phone,
  onChangeName,
  onChangePhone,
  onSubmit,
}: LoginFormProps) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoHeader}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logoImage} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.formContent}>
        <Text style={styles.title}>Вхід у додаток</Text>

        <TextInput
          placeholder="Юрій Пін"
          placeholderTextColor={THEME.placeholder}
          style={styles.input}
          value={name}
          onChangeText={onChangeName}
          autoCapitalize="words"
            keyboardType="default"
        />

        <TextInput
          placeholder="+380..."
          style={styles.input}
          value={phone}
          onChangeText={onChangePhone}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};