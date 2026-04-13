import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Platform 
} from 'react-native';


interface SearchInputProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  containerStyle?: object; 
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = 'Знайти...', 
  onSearch,
  containerStyle 
}) => {
  const [text, setText] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
          returnKeyType="search" 
          onSubmitEditing={handleSearch} 
          clearButtonMode="while-editing" 
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16, 
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: '#E0E0E0',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    flex: 1, 
    height: 48, 
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'center', 
    ...Platform.select({
      android: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    }),
  },
  iconButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchInput;