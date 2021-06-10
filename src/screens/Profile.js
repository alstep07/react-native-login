import React from 'react';
import {useUserContext} from '../context';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import {logout} from '../services/auth';

const Profile = () => {
  const user = useUserContext();

  const handlePress = () => {
    logout();
  };

  return <ProfileScreen user={user} handlePress={handlePress} />;
};

export default Profile;
