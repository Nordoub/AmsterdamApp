import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import THEME from '../constants/theme';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Screen = ({ children, ...viewProps }: PropsWithChildren<Props>) => {
  return (
    <View style={styles.container} {...viewProps}>
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    padding: THEME.SPACING.xl,
  },
});
