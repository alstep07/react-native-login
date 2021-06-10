import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabsNavigator from './TabsNavigator/index.js';
import Modal from '../../screens/Modal';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={TabsNavigator} />
      <Stack.Screen name="Modal" component={Modal} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
