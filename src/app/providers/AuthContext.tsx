import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { formatPhoneNumber } from '../../constants/formatPhoneNumber';
import { THEME } from '../../constants/Theme';

interface User {
    name: string,
    phone: string,
    email?: string,
    bonusUP: number
}

interface AuthContextType {
    user: User | null;
    login: (name: string, phone: string, email?: string)=> void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode})=> {
    const [user, setUser] = useState<User | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(true);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+380');

    const handlerLogin = ()=> {
        if(name && phone){
            setUser({name, phone, bonusUP: 150});
            setIsModalVisible(false);
        }
    }

    const handlerPhoneNumber = (text: string)=> {
        const formatted = formatPhoneNumber(text);
    setPhone(formatted);
    }

    return (
        <AuthContext.Provider value={{ user, login: handlerLogin }}>
      {children}

      <Modal visible={isModalVisible} animationType="slide" transparent={false}>
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
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Ім'я та Прізвище</Text>
              <TextInput 
                placeholder="Юрій Пін" 
                placeholderTextColor={THEME.placeholder}
                style={styles.input} 
                value={name}
                onChangeText={setName} 
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Номер телефону</Text>
              <TextInput 
                placeholder="+380 (XX) XXX XX XX" 
                placeholderTextColor={THEME.placeholder}
                style={styles.input} 
                keyboardType="phone-pad"
                value={phone}
                onChangeText={handlerPhoneNumber} 
                maxLength={19}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Пароль</Text>
              <TextInput 
                placeholder="••••••••" 
                placeholderTextColor={THEME.placeholder}
                style={styles.input} 
                secureTextEntry 
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handlerLogin}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPass}>
              <Text style={styles.forgotPassText}>Забули пароль?</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </AuthContext.Provider>
    )

}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  // Темна шапка, як на фото Акаунта
  logoHeader: {
    height: '25%', // займає верхню частину
    backgroundColor: THEME.darkHeader,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '60%', // Блакитний логотип "brain"
    height: 60,
  },
  // Біла форма, як на фото Акаунта
  formContent: {
    flex: 1,
    padding: 25,
    marginTop: -20, // Ефект "напливу" на темну шапку
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Для Android shadow
  },
  title: {
    fontSize: 24,
    fontWeight: '700', // Товстий шрифт, як "Еее"
    color: THEME.text,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: THEME.placeholder,
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: THEME.inputBorder,
    borderRadius: 12, // Округлі кути
    paddingHorizontal: 15,
    fontSize: 16,
    color: THEME.text,
    backgroundColor: '#fff', // Білий фон вводу
  },
  // Кнопка в стилі активного синього (з нижнього меню)
  button: {
    backgroundColor: THEME.active,
    height: 55,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: THEME.active,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  forgotPass: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPassText: {
    color: THEME.placeholder,
    fontSize: 14,
  },
});