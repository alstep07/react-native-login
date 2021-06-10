import React from 'react';
import Profile from '../../../screens/Profile';
import Library from '../../../screens/Library';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenOptions, tabsBarOptions} from './options';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={screenOptions}
      tabBarOptions={tabsBarOptions}>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
