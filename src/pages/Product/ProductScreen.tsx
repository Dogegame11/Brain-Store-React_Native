import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../../app/Context/CartContext';

const ProductScreen = () => {
  const route = useRoute();
  const { product } = route.params;

  const { addToCart } = useCart();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
      
      <Image
        source={{ uri: product.image }}
        style={{ width: '100%', height: 500 }}
      />

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>
          {product.title}
        </Text>

        <Text style={{ color: '#666', marginTop: 6 }}>
          {product.brand}
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>
            {product.price}
          </Text>
          <Text style={{ marginLeft: 4 }}>грн</Text>
        </View>

        {/* Опис (якщо є) */}
        {product.description && (
          <Text style={{ marginTop: 16, lineHeight: 20 }}>
            {product.description}
          </Text>
        )}

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#007AFF',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center'
          }}
          onPress={() =>
            addToCart({
              id: product.id.toString(),
              name: product.title,
              price: product.price,
              brainUP: 10,
              quantity: 1,
              image: product.image,
            })
          }
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Додати в кошик
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default ProductScreen;