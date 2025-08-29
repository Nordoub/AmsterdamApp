import React from 'react';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { IconName } from '../models/icon';
import THEME from '../constants/theme';

type Props = {
  name: IconName;
  size?: number;
};
const Icon = ({ name, size = 30 }: Props) => {
  return <AntDesign name={name} size={size} color={THEME.COLORS.primary} />;
};

export default Icon;
