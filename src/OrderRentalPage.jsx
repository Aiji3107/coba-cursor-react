import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, Modal } from 'react-native';

const RentalPage = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setCartVisible(true); // Show cart immediately after adding an item
  };

  const rentalItems = [
    { id: 1, name: 'Sepeda Gunung', price: 50000, image: 'path/to/sepeda-gunung.jpg', popular: true },
    { id: 2, name: 'Motor Matic', price: 75000, image: 'path/to/motor-matic.jpg', popular: false },
    { id: 3, name: 'Sepeda Lipat', price: 40000, image: 'path/to/sepeda-lipat.jpg', popular: true },
    { id: 4, name: 'Motor Sport', price: 100000, image: 'path/to/motor-sport.jpg', popular: false }
  ];

  const RentalItem = ({ item }) => (
    <View style={styles.rentalItem}>
      <Image source={{ uri: item.image }} style={styles.rentalImage} />
      {item.popular && <Text style={styles.popularLabel}>Popular</Text>}
      <Text style={styles.rentalName}>{item.name}</Text>
      <Text style={styles.rentalPrice}>Rp{item.price} / hari</Text>
      <Button title="+" onPress={() => handleAddToCart(item)} />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    rentalItem: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
    },
    rentalImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    popularLabel: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'orange',
      color: 'white',
      padding: 5,
    },
    rentalName: {
      fontWeight: 'bold',
    },
    rentalPrice: {
      color: 'grey',
    },
    cartBar: {
      position: 'absolute',
      bottom: 35,
      left: 15,
      right: 15,
      borderRadius: 10,
      backgroundColor: 'green',
      padding: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'bottom 0.5s ease-in-out',
    }
  });

  const cartBarStyle = {
    ...styles.cartBar,
    bottom: cartVisible ? 35 : -100,
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={rentalItems}
        renderItem={({ item }) => <RentalItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <View style={cartBarStyle}>
        <Text>Cart • {cart.length} Item</Text>
        <Text>Rp{cart.reduce((total, item) => total + item.price, 0)} (Incl. tax)</Text>
      </View>
    </View>
  );
};

export default RentalPage;
