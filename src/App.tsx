import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';
import { AuthProvider } from './app/providers/AuthContext';

function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </AuthProvider>
      
    </SafeAreaProvider>
  );
}

export default App;