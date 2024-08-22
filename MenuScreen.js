import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useCart } from './CartContext';

const { width } = Dimensions.get('window');

const foodItems = [
  { id: '1', name: 'Steak & Fried Chips', image: 'https://i.pinimg.com/originals/42/e3/e6/42e3e6a48df41f11e46ddfc96996b7f9.jpg', description: 'Juicy beef steak seasoned to perfection and grilled with crispy and golden fried chips', price: 'R45.00' },
  { id: '2', name: 'Steam Bread & Mogodu', image: 'https://th.bing.com/th/id/R.809d233920b4cdf878ad1682ed1c4e9b?rik=16gg0Kfqz%2foG6Q&pid=ImgRaw&r=0', description: 'Traditional South African dish made from beef tripe with fluffy and slightly sweet bread, steamed to perfection', price: 'R50.00' },
  { id: '3', name: 'Cheeseburger', image: 'https://th.bing.com/th/id/R.d365ca0b96b2df3cf193653e6bd66c2f?rik=hGG2Kt8vgz5Qhg&pid=ImgRaw&r=0', description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.', price: 'R30.00' },
  { id: '4', name: 'Chocolate Cake', image: 'https://www.oogio.net/wp-content/uploads/2018/11/American_chocolate_cake6-s.jpg', description: 'Rich chocolate cake with a smooth ganache.', price: 'R33.00' },
  { id: '5', name: 'Lamb Chops', image: 'https://th.bing.com/th/id/OIP.QlNd43EYCQpaN9SCxljs8wHaJQ?rs=1&pid=ImgDetMain', description: 'Grilled lamb chops with mint sauce.', price: 'R40.00' },
  { id: '6', name: 'Apple Pie', image: 'https://th.bing.com/th/id/OIP.Wv2pqOcXUqe80AwXJjjvAAHaLH?w=682&h=1024&rs=1&pid=ImgDetMain', description: 'Classic apple pie with a flaky crust.', price: 'R20.00' },
  { id: '7', name: 'Buffalo Wings', image: 'https://th.bing.com/th/id/R.a81441693f298447490c3e1d6b090a51?rik=FPdlNjbC2mCPVQ&riu=http%3a%2f%2fdelightsofculinaria.com%2fwp-content%2fuploads%2f2013%2f02%2fdsc_1110.jpg&ehk=ZIOAfWL2U0R6vpZrmZwSovBjHbJWeoSW9fbkyDayKQA%3d&risl=&pid=ImgRaw&r=0', description: 'Spicy chicken wings served with celery and ranch.', price: 'R60.00' },
  { id: '8', name: 'Margherita Pizza', image: 'https://th.bing.com/th/id/R.a16237f320334837230ef4fcc5516573?rik=DG0LoeoTCXVyDA&pid=ImgRaw&r=0', description: 'Tomato, mozzarella, and fresh basil.', price: 'R70.00' },
];

const MenuScreen = () => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Sky blue background
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  image: {
    width: width / 2 - 40,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: 'black', 
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default MenuScreen;
