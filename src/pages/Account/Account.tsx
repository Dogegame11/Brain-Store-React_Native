import React from 'react';
import { 
  Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native';
import { styles } from './AccountStyle';
import { AuthModal } from '../../app/providers/AuthModal';



import BarcodeCard from '../../shared/ui/Barcode';


import { MAIN_MENU_ITEMS, SECONDARY_MENU_ITEMS, MenuItem } from '../../constants/menuConfig';

import { useAuth } from '../../app/Context/AuthContext';


const MenuItemRow: React.FC<{ item: MenuItem; isLast?: boolean }> = ({ item, isLast }) => (
  <TouchableOpacity style={[styles.menuRow, isLast && styles.lastMenuRow]}>
    <View style={styles.menuLeft}>
      <Text style={[styles.menuTitle, { color: item.iconColor }]}>{item.title}</Text>
    </View>
    {item.count ? (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.count}</Text>
      </View>
    ) : null}
  </TouchableOpacity>
);

const AccountScreen: React.FC = () => {

  const {user} = useAuth();

if (!user) {
  return <AuthModal />;
}


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E50" />

      <ScrollView 
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 30 }} 
      >
        <TouchableOpacity style={styles.profileBlock}>
          <View style={styles.profileLeft}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{user?.name}</Text>
              <Text style={styles.profilePhone}>{user?.phone}</Text>
            </View>
          </View>
          <View style={styles.profileRight}>
            <View style={styles.bonusBlock}>
              <Text style={styles.bonusCount}>{user?.bonusUP}</Text>
              <Text style={styles.bonusIcon}>[UP]</Text>
            </View>
            <Text style={styles.profileArrow}>›</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.separator} />
        <BarcodeCard value={user.phone} />
        
        <View style={styles.menuBlock}>
          {MAIN_MENU_ITEMS.map((item, index) => (
            <MenuItemRow 
              key={item.id} 
              item={item} 
              isLast={index === MAIN_MENU_ITEMS.length - 1} 
            />
          ))}
        </View>
        
        <View style={styles.lineDivider} /> 
        <View style={styles.separator} /> 
        
        <View style={styles.menuBlock}>
          {SECONDARY_MENU_ITEMS.map((item, index) => (
            <MenuItemRow 
              key={item.id} 
              item={item} 
              isLast={index === SECONDARY_MENU_ITEMS.length - 1} 
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;