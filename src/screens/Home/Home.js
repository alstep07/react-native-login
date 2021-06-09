import React from 'react';
import {useUserContext} from '../../context';
import {logout} from '../../services/auth';
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen';
import LibraryScreen from '../../components/LibraryScreen/LibraryScreen';
import {Tab} from '../../navigation';

const Home = () => {
  const username = useUserContext();

  const handlePress = () => {
    logout();
  };

  return (
    <Tab.Navigator>
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
