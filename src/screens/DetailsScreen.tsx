import { Text } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const DetailsScreen = ({ route }: Props) => {
  const { product } = route.params;

  return (
    <Screen>
      <Text>{product.title}</Text>
    </Screen>
  );
};

export default DetailsScreen;
