import React from 'react';
import Profile from '../../../screens/Profile';
import Library from '../../../screens/Library';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenOptions, tabsBarOptions} from './options';

const Tab = createBottomTabNavigator();

const TabsNavigator = ({navigation}) => {
  const openModal = index => {
    navigation.navigate('Modal');
    console.log(index);
  };

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={screenOptions}
      tabBarOptions={tabsBarOptions}>
      <Tab.Screen name="Library">
        {props => <Library {...props} openModal={openModal} />}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
