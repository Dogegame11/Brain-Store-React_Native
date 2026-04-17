import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';
import { AuthProvider } from './app/Context/AuthContext';
import { CartProvider } from './app/Context/CartContext';

function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <CartProvider>
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
        </CartProvider>

        
      </AuthProvider>
      
    </SafeAreaProvider>
  );
}

export default App;