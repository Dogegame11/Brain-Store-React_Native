import React, { useState, useMemo, useDeferredValue } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useProducts } from '../../app/hooks/useProducts';

const SmartSearchScreen = () => {
  const { products, loading } = useProducts();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filteredData = useMemo(() => {
    if (!deferredQuery.trim()) return [];

    const lowerQuery = deferredQuery.toLowerCase();

    return products.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.brand.toLowerCase().includes(lowerQuery),
    );
  }, [deferredQuery, products]);

  const showDropdown = query.trim().length > 0;

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Пошук товарів..."
          placeholderTextColor="#999"
          style={styles.input}
        />

        {showDropdown && (
          <View style={styles.dropdown}>
            {filteredData.length === 0 ? (
              <Text style={styles.empty}>Нічого не знайдено</Text>
            ) : (
              <FlatList
                data={filteredData}
                keyExtractor={item => item.title}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => setQuery(item.title)}
                  >
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.brand}>{item.brand}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 16,
  },

  searchWrapper: {
    position: 'relative',
    zIndex: 10,
  },

  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  dropdown: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    maxHeight: 250,

    // тінь
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },

    elevation: 5, // Android

    zIndex: 1000,
  },

  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  brand: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },

  empty: {
    padding: 20,
    textAlign: 'center',
    color: '#999',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SmartSearchScreen;
