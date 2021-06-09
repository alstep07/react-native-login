import React from 'react';
import {useUserContext} from '../../context';
import {logout} from '../../services/auth';
import HomeScreen from '../../components/HomeScreen/HomeScreen';

const Home = () => {
  const username = useUserContext();

  const handlePress = () => {
    logout();
  };

  return <HomeScreen username={username} handlePress={handlePress} />;
};

export default Home;
