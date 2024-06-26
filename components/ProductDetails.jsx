import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function ProductDetails({ route }) {
    const { product } = route.params;
    
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginBottom: 20,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  price: {
    fontSize: 30,
    color: 'green',
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
  },
});
