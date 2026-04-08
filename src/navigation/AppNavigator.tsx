import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Home from '../screens/Home/Home';

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>(); 

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Main" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;