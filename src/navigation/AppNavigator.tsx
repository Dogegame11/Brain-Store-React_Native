import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootStackParamList = {
    Main: undefined; 
    Details: { itemId: number };
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
            
        </Stack.Navigator>
    );
};

export default AppNavigator;