import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { useCart } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

// CartBadge component for displaying the notification of added items
const CartBadge = ({ count }) => {
  if (count === 0) return null;

  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const CartScreen = () => {
  const { cartItems, updateCartItemQuantity, removeCartItem, clearCart } = useCart();
  const navigation = useNavigation();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Calculate total items count
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setItemCount(totalCount);
  }, [cartItems]);

  useEffect(() => {
    // Set badge count in navigation options
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <View style={{ position: 'relative' }}>
          <Icon name="shopping-cart" type="font-awesome" color={color} size={size} />
          <CartBadge count={itemCount} />
        </View>
      ),
    });
  }, [itemCount, navigation]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + parseFloat(item.price.replace('R', '').replace(':00', '')) * item.quantity, 
    0).toFixed(2);
  };

  const handleCheckout = () => {
    Alert.alert(
      'Checkout',
      'Are you sure you want to proceed to checkout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => {
          // Clear cart
        } },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => updateCartItemQuantity(item.id, +1)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCartItemQuantity(item.id, -1)} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeCartItem(item.id)} style={styles.removeButton}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.summary}>
        <Text style={styles.total}>Total: R{calculateTotal()}</Text>
        <Button title="Proceed to Checkout" onPress={handleCheckout} color="#000000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#87CEEB', // Sky blue background
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white', 
    borderRadius: 10,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    color: 'black', 
  },
  quantity: {
    fontSize: 16,
    color: 'black', 
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'black', 
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  removeButton: {
    backgroundColor: 'black', 
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'black',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default CartScreen;












