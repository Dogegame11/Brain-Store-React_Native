import React from 'react';
import {Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './theme/NavgitaionAppStyle';

import Home from './screens/Home/Home';
import Account from './screens/Account/Account';
import Cart from './screens/Cart/Cart';
import Orders from './screens/Orders/Orders';

export type RootTabParamList = {
  Home: undefined;
  Orders: undefined;
  Cart: undefined;
  Account: undefined;
};

const TAB_ICONS: Record<keyof RootTabParamList, any> = {
  Home: require('./assets/Home.png'),
  Orders: require('./assets/Head.png'),
  Cart: require('./assets/Home.png'),
  Account: require('./assets/Head.png'),
};


const Tab = createBottomTabNavigator<RootTabParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ color, size }) => {
            return (
              <Image 
                source={TAB_ICONS[route.name]} 
                style={[
                  { 
                    width: size, 
                    height: size, 
                  }
                ]} 
                resizeMode="contain" 
              />
            );
          },
        })}
        
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Головна' }} />
        <Tab.Screen name="Orders" component={Orders} options={{ title: 'Замовлення' }} />
        <Tab.Screen name="Cart" component={Cart} options={{ title: 'Кошик' }} />
        <Tab.Screen name="Account" component={Account} options={{ title: 'Акаунт' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;