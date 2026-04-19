import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';
import { AuthProvider } from './app/Context/AuthContext';
import { CartProvider } from './app/Context/CartContext';
import { StyleSheet } from 'react-native';


function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AuthProvider>
        <CartProvider>
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
        </CartProvider>
      </AuthProvider>
      </SafeAreaView>
      
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;