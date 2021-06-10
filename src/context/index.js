import {createContext, useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {getUserFromDB} from '../services/firestore';

export const useUser = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState(null);

  // const onAuthStateChanged = newUser => {
  //   const getUser = async () => {
  //     const userFromDB = await getUserFromDB(newUser.uid);
  //     setUser(userFromDB);
  //   };
  //   getUser();
  //   initializing && setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (initializing) {
  //   return null;
  // }
  const user = {name: 'Sasha'};

  return user;
};

export const UserContext = createContext({});
