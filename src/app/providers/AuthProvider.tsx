import React, { useState } from 'react';
import { Modal} from 'react-native';
import { useAuth } from '../Context/AuthContext';
import { formatPhoneNumber } from '../../constants/formatPhoneNumber';
import { LoginForm } from '../../shared/ui/LoginForm';

export const AuthModal = () => {
  const { login } = useAuth();

  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+380');



  const handleLogin = () => {
    if (name && phone) {
      login(name, phone);
      setIsVisible(false);
    }
  };

  const handlePhone = (text: string) => {
    setPhone(formatPhoneNumber(text));
  };

  return (
    <Modal visible={isVisible} animationType="slide">
        <LoginForm
        name={name}
        phone={phone}
        onChangeName={setName}
        onChangePhone={handlePhone}
        onSubmit={handleLogin}>
        </LoginForm>

    </Modal>
  );
};