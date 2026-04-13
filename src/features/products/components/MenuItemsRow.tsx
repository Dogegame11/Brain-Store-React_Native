// src/components/MenuItemRow.tsx
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../../../pages/Account/AccountStyle';

interface Props {
  title: string;
  count?: number;
  onPress: () => void;
  iconName: string; 
}

export const MenuItemRow: React.FC<Props> = ({ title, count, onPress}) => (
  <TouchableOpacity style={styles.menuRow} onPress={onPress}>
    <View style={styles.menuLeft}>
      
      <Text style={styles.menuTitle}>{title}</Text>
    </View>

    <View style={styles.menuLeft}>
      {count ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      ) : null}
    </View>
  </TouchableOpacity>
);