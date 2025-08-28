import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { Product as ProductModle } from '../models/Project';

type Props = {
  product: ProductModle;
} & TouchableOpacityProps;

const Product = ({ product, ...touchableProps }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...touchableProps}>
      <Text>{product.title}</Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {},
});
