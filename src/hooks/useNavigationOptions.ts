import { useNavigation } from '@react-navigation/native';
import React, { JSX } from 'react';

type Props = {
  headerTitle?: string;
  subHeader?: () => JSX.Element | null;
  headerRight?: () => JSX.Element;
  headerLeft?: () => JSX.Element;
};
const useNavigationOptions = ({
  headerTitle,
  headerRight,
  headerLeft,
  subHeader,
}: Props) => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle,
      headerRight,
      headerLeft,
      subHeader,
    });
  }, [headerTitle, headerRight, headerLeft, subHeader, navigation]);
};

export default useNavigationOptions;
