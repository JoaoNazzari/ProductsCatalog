import React, { useContext } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';
import { CartContext } from '../context/CartContext';

export function Product({ item }) {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <View style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Button onPress={addToCart}>
              Add to Cart
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productDetails: {
    paddingLeft: 20,
  },
  productPrice: {
    fontSize: 20,
  },
});
