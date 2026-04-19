import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const categories = [
  'ТОП товари',
  'Мобільні телефони',
  'Монітори',
  'Повербанки',
  'Лазерні принтери',
  'Телевізори',
  'БФП',
  'Відеокарти',
  'Зарядні станції',
  'Ноутбуки',
  'Геймпади',
  'Батареї LiFePo4',
  'Комп’ютери',
];

interface TopCategoriesProps {
  onCategoryPress?: (category: string) => void;
  onSeeAllPress?: () => void;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ 
  onCategoryPress, 
  onSeeAllPress 
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: number, category: string) => {
    setSelectedIndex(index);
    if (onCategoryPress) {
      onCategoryPress(category);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>ТОП ТОВАРИ</Text>
      <View style={styles.buttonsContainer}>
        {categories.map((category, index) => {
          const isSelected = index === selectedIndex;
          return (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                isSelected ? styles.selectedButton : styles.unselectedButton,
              ]}
              onPress={() => handlePress(index, category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected ? styles.selectedText : styles.unselectedText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity 
        style={styles.seeAllButton} 
        onPress={onSeeAllPress}
        activeOpacity={0.6}
      >
        <Text style={styles.seeAllText}>Всі товари</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff', 
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900', 
    color: '#333',
    textTransform: 'uppercase', 
    marginBottom: 16,
    fontFamily: 'System', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4, 
    borderWidth: 1,
    marginRight: 8, 
    marginBottom: 8, 
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  unselectedButton: {
    backgroundColor: '#fff',
    borderColor: '#2196F3', 
  },

  selectedButton: {
    backgroundColor: '#81D4FA', 
    borderColor: '#2196F3',
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '500',
  },

  unselectedText: {
    color: '#000',
  },

  selectedText: {
    color: '#000', 
    fontWeight: '600', 
  },

  seeAllButton: {
    alignSelf: 'flex-end', 
    marginTop: 8,
    padding: 4,
  },
  seeAllText: {
    fontSize: 15,
    color: '#03A9F4', 
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default TopCategories;