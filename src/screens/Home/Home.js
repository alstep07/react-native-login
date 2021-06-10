import React from 'react';
import {useUserContext} from '../../context';
import {logout} from '../../services/auth';
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen';
import LibraryScreen from '../../components/LibraryScreen/LibraryScreen';
import {Tab} from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../common/theme';

const Home = () => {
  const user = useUserContext();

  const handlePress = () => {
    logout();
  };

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
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile">
        {props => (
          <ProfileScreen {...props} user={user} handlePress={handlePress} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Home;
