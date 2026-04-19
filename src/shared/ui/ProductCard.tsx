import React, { forwardRef } from 'react';
import {
  View,
  Text,
  FlatList,
  FlatListProps,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useProducts } from '../../app/hooks/useProducts';
import { useCart } from '../../app/Context/CartContext';
import { styles } from './ProductCardStyle';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/navigation/AppNavigator';


const compareIcon = require('../../assets/compare.png'); 
const likeIcon = require('../../assets/like.png');
const brainUPIcon = require('../../assets/BrainUP.png');

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductScreen'
>;

interface ProductListProps extends Partial<FlatListProps<any>> {
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
}

const ProductList = forwardRef<FlatList, ProductListProps>((props, ref) => {
  const { ListHeaderComponent, ...restProps } = props;
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
const navigation = useNavigation<NavigationProp>();

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, marginTop: 50 }} />;
  }

  return (
    <View style={{ width: '100%', height: "100%" }}>
      <FlatList
        ref={ref}
        {...restProps}
        data={products}
        numColumns={2}
        key={2}
        ListHeaderComponent={ListHeaderComponent}
        columnWrapperStyle={styles.row}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
          style={styles.card}
  onPress={() => navigation.navigate('ProductScreen', { product: item })}>
            <View style={styles.card}>
            <View style={styles.topActions}>
              <TouchableOpacity 
              style={styles.iconButton}
              
              >
                <Image source={compareIcon} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={likeIcon} style={styles.actionIcon} />
              </TouchableOpacity>
              <Text style={styles.pointsText}>10
                <Image source={brainUPIcon} style={[styles.actionIcon, { marginLeft: 4 }]} />
              </Text>
                
            </View>

            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>

            <View style={styles.priceContainer}>

                <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.currency}>грн</Text>
                

            </View>

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
              <Text style={styles.buttonText}>Купити</Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
          
        )}
      />
    </View>
  );
});

ProductList.displayName = 'ProductList';

export default ProductList;