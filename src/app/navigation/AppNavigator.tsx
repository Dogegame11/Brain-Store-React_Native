import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { BottomTabNavigator } from './BottomTabNavigator';
import ProductScreen from '../../pages/Product/ProductScreen';

export type RootStackParamList = {
  Main: undefined;
  ProductScreen: { product: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>(); 


const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Main">
  <Stack.Screen
    name="Main"
    component={BottomTabNavigator}
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="ProductScreen"
    component={ProductScreen}
    options={{ title: 'Товар' }}
  />
</Stack.Navigator>
    );
};

export default AppNavigator;