import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../../app/Context/CartContext';
import { styles } from './CartStyles';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const { items, removeFromCart, totalPrice } = useCart();
  const navigation = useNavigation<any>();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={styles.emptyTitle}>Кошик порожній</Text>
        <Text style={styles.emptySubtitle}>Додайте товари, щоб оформити замовлення</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Перейти до покупок</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price} грн</Text>
              <Text style={styles.itemQuantity}>Кількість: {item.quantity}</Text>
            </View>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => removeFromCart(item.id)}
            >
              <Text style={styles.deleteButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.bottomSection}>
          <View style={styles.footer}>
        <Text style={styles.totalLabel}>Разом:</Text>
        <Text style={styles.totalPriceText}>{totalPrice} грн</Text>
      </View>
      
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Оформити замовлення</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default Cart;