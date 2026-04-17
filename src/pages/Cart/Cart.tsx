import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../../app/Context/CartContext';
import { styles } from './CartStyles';

const Cart = () => {
  const { items, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🛒</Text>

        <Text style={styles.emptyTitle}>
          Кошик порожній
        </Text>

        <Text style={styles.emptySubtitle}>
          Додайте товари, щоб оформити замовлення
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Перейти до покупок
          </Text>
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
            <Text>{item.name}</Text>
            <Text>{item.quantity} x {item.price}</Text>

            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text>Видалити</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.totalPrice}>
        Всього: {totalPrice}
      </Text>
    </View>
  );
};

export default Cart;