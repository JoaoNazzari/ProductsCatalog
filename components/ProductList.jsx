import React from 'react';
import { Product } from './Product';
import { View } from 'react-native';

export function ProductList({ data = [] }) {
  return (
    <View>
      {data.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </View>
  );
}
