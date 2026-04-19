import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../../shared/ui/SearchBar';
import ImageSlider from '../../features/products/components/ImageSlider';
import ProductList from '../../shared/ui/ProductCard';
import TopCategories from '../../features/products/components/TopProductsSection';

const Home: React.FC = () => {

  const renderHeader = () => (
    <View>
      <SearchBar />
      <ImageSlider />
      <TopCategories 
              onCategoryPress={(category) => console.log('Selected:', category)}
              onSeeAllPress={() => console.log('See all pressed')}
            />
    </View>
  );

  return (
    <View style={styles.container}>
      <ProductList 
      ListHeaderComponent={renderHeader} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;