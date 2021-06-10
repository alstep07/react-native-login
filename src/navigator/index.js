import React from 'react';
import {useUserContext} from '../context';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Navigator = () => {
  const user = useUserContext();

  return user ? <MainNavigator /> : <AuthNavigator />;
};

export default Navigator;
