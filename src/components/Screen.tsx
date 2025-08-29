import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import THEME from '../constants/theme';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Screen = ({
  children,
  style,
  ...viewProps
}: PropsWithChildren<Props>) => {
  return (
    <View style={[styles.container, style]} {...viewProps}>
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.SPACING.xl,
    backgroundColor: THEME.COLORS.background,
  },
});
