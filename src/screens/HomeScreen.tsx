import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStack';
import useGetProductsQuery from '../hooks/useGetProductsQuery';
import Product from '../components/Product';
import { Product as ProductModel } from '../models/Project';
import THEME from '../constants/theme';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({ navigation: { navigate } }: Props) => {
  const { data } = useGetProductsQuery();

  const navigateToProductDetails = (product: ProductModel) =>
    navigate('Details', { product });

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        renderItem={({ item: product }) => (
          <Product
            product={product}
            onPress={() => navigateToProductDetails(product)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: THEME.SPACING.zero,
  },
  list: {
    padding: THEME.SPACING.xl,
  },
});

export default HomeScreen;
