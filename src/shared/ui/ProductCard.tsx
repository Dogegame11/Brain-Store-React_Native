import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useProducts } from '../../app/hooks/useProducts';
import { useCart } from '../../app/Context/CartContext';
import { styles } from './ProductCardStyle'


interface ProductListProps {
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
}

const ProductList: React.FC<ProductListProps> = ({ListHeaderComponent}) => {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={{width: '100%', height: "100%" }}>
      <FlatList
      key={2}   
        data={products}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        columnWrapperStyle={styles.row}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>

            <Text style={styles.brand}>{item.brand}</Text>

            <Text style={styles.price}>{item.price} грн</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() =>
                addToCart({
                  id: item.id.toString(),
                  name: item.title,
                  price: item.price,
                  brainUP: 10,
                  quantity: 1,
                  image: item.image,
                })
              }
            >
              <Text style={styles.buttonText}>Додати</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;