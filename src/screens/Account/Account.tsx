import React from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Image,
} from 'react-native';

import { styles } from './AccountStyle';
import BarcodeCard from '../../components/Barcode';

const userPhone = "0635872033";

type MenuItem = {
  id: number;
  title: string;
  count?: number; 
  iconColor?: string; 
};

const menuItems: MenuItem[] = [
  { id: 1,  title: 'Каталог', iconColor: '#28677c' },
  { id: 2,  title: 'Кошик', count: 1, iconColor: '#28677c' },
  { id: 3,  title: 'Акції', iconColor: '#28677c' },
  { id: 4,  title: 'Бажання', iconColor: '#28677c' },
  { id: 5,  title: 'Порівняння', iconColor: '#28677c' },
];

const secondaryItems: MenuItem[] = [
  { id: 6,  title: 'Магазини', iconColor: '#607D8B' },
  { id: 7,  title: 'Уцінені товари', iconColor: '#607D8B' },
];

const MenuItemRow: React.FC<{ item: MenuItem, isLast?: boolean }> = ({ item, isLast }) => (
  <TouchableOpacity style={[styles.menuRow, isLast && styles.lastMenuRow]}>
    <View style={styles.menuLeft}>
      
      <Text style={[styles.menuTitle, { color: item.iconColor || '#333' }]}>
        {item.title}
      </Text>
    </View>

    {item.count && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.count}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const AccountScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E50" />
      
      <View style={styles.header}>
        <Image
        
          source={require('../../assets/logo.png')}
          style= {{width: 120, height: 40}}
          resizeMode='contain'
        />

        <TouchableOpacity style={styles.langSelector}>
          <Text style={styles.langText}>UA </Text>
        <Text style={styles.locationTitle}>Київ</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.profileBlock}>
          <View style={styles.profileLeft}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarIcon}>👤</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Олексій</Text>
              <Text style={styles.profilePhone}>063 587 20 33</Text>
              <View style={{ marginTop: 10 }}>
        </View>
            </View>
          </View>
          <View style={styles.profileRight}>
            <View style={styles.bonusBlock}>
              <Text style={styles.bonusCount}>156 балів</Text>
              <Text style={styles.bonusIcon}>[UP]</Text>
            </View>
            <Text style={styles.profileArrow}>›</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.separator} />

        <BarcodeCard 
            value={userPhone} 
        />
        
        <View style={styles.menuBlock}>
          {menuItems.map(item => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </View>
        
        <View style={styles.lineDivider} />     
        <View style={styles.separator} />   
        <View style={styles.menuBlock}>
          {secondaryItems.map(item => (
            <MenuItemRow key={item.id} item={item} isLast={false}/>
          ))}
        </View>

        <View />
      </ScrollView>
    </SafeAreaView>
  );
};



export default AccountScreen;