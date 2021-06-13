import React, {useContext} from 'react';
import {UserContext} from '../context';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Navigator = () => {
  const user = useContext(UserContext);

  return user ? <MainNavigator /> : <AuthNavigator />;
};

export default Navigator;
