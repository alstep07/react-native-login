import React from 'react';
import theme from '../../../common/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const tabsBarOptions = {
  activeTintColor: theme.colors.pinkAccent,
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
};

export const screenOptions = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;

    if (route.name === 'Library') {
      iconName = 'search';
    } else if (route.name === 'Profile') {
      iconName = 'user-o';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
});
