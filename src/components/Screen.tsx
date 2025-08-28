import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

const Screen = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
