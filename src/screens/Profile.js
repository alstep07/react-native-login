import React, {useContext} from 'react';
import {UserContext} from '../context';
import ProfileScreen from '../components/ProfileScreen';
import {logout} from '../services/auth';

const Profile = () => {
  const user = useContext(UserContext);

  const handlePress = () => {
    logout();
  };

  return <ProfileScreen user={user} handlePress={handlePress} />;
};

export default Profile;
