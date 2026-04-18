import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCart } from '../../app/Context/CartContext';


import Home from '../../pages/Home/Home';
import Account from '../../pages/Account/Account';
import Cart from '../../pages/Cart/Cart';
import Orders from '../../pages/Orders/Orders';
import Header from '../../shared/ui/Header';


import { styles } from '../../theme/NavgitaionAppStyle';


export type RootTabParamList = {
  Home: undefined;
  Orders: undefined;
  Cart: undefined;
  Account: undefined;
};


const TAB_ICONS: Record<keyof RootTabParamList, any> = {
  Home: require('../../assets/Home.png'),
  Orders: require('../../assets/Orders.png'),
  Cart: require('../../assets/Cart.png'),
  Account: require('../../assets/Account.png'),
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {

  const {items} = useCart();

    const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);



  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: true,
        header: ()=> <Header />,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ size }) => (
          <Image
            source={TAB_ICONS[route.name]}
            style={{ width: size, height: size }}
            resizeMode="contain"
          />
        ),
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Головна' }} 
      />
      <Tab.Screen 
        name="Orders" 
        component={Orders} 
        options={{ title: 'Замовлення' }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        
        options={{ 
          title: 'Кошик',
          tabBarBadge: cartItemsCount > 0 ? cartItemsCount : undefined,
          tabBarBadgeStyle: {
            backgroundColor: '#28677c',
            color: 'white',
            fontSize: 10,
          }
         }} 
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{ title: 'Акаунт' }} 
      />
    </Tab.Navigator>
  );
};