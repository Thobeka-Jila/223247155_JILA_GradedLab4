import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (id, change) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
      )
    );
  };

  const removeCartItem = (id) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


