import React from 'react';
import {useUserContext} from '../../context';
import {logout} from '../../services/auth';
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen';
import LibraryScreen from '../../components/LibraryScreen/LibraryScreen';
import {Tab} from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../common/theme';

const Home = () => {
  const username = useUserContext();

  const handlePress = () => {
    logout();
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        inactiveTintColor: theme.colors.tab,
      }}>
      <Tab.Screen name="Profile">
        {props => (
          <ProfileScreen
            {...props}
            username={username}
            handlePress={handlePress}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default Home;
