import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {getUserFromDB} from './services/store/user';

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChanged = newUser => {
    const getUser = async () => {
      const userFromDB = await getUserFromDB(newUser.uid);
      setUser(userFromDB);
    };
    newUser ? getUser() : setUser(null);
    initializing && setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <UserContext.provider value={user}>{...children}</UserContext.provider>
  );
};
