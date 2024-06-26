import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '@rneui/themed';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

const Stack = createStackNavigator();

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <CartProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerTitle: 'Shopping' }}>
              {() => (
                <>
                  <Header
                    centerComponent={{ text: 'Shopping', style: styles.headerCenterText }}
                    rightComponent={<Cart />}
                  />
                  <ScrollView style={styles.scrollElement}>
                    <ProductList data={products} />
                  </ScrollView>
                  <StatusBar style="auto" />
                </>
              )}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerTitle: 'Product Details' }} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerCenterText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollElement: {
    width: '100%',
  }
});
