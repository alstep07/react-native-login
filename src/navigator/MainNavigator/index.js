import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabsNavigator from './TabsNavigator';

export const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={TabsNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
