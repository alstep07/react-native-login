import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';

export const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
