import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import { TabParamList } from '../models/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
