import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../../shared/ui/SearchBar';
import ImageSlider from '../../features/products/components/ImageSlider';
import ProductList from '../../shared/ui/ProductCard';

const Home: React.FC = () => {

  const renderHeader = () => (
    <View>
      <SearchBar />
      <ImageSlider />
    </View>
  );

  return (
    <View style={styles.container}>
      <ProductList ListHeaderComponent={renderHeader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Тепер екран точно не буде "стиснутим"
    backgroundColor: '#fff',
  },
});

export default Home;