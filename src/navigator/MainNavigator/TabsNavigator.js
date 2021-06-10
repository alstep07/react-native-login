import React from 'react';
import Profile from '../../screens/Profile';
import Library from '../../screens/Library';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../common/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Library') {
            iconName = 'search';
          } else if (route.name === 'Profile') {
            iconName = 'user-o';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.tabActive,
        inactiveTintColor: theme.colors.lightGray,
        style: {
          height: 83,
        },
        labelStyle: {
          fontSize: 10,
          marginTop: -10,
        },
        tabStyle: {
          paddingBottom: 30,
        },
      }}>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
