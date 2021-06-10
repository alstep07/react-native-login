import React, {useState, useEffect} from 'react';
import {UserContext} from './context';
import {getUserFromDB} from './services/firestore';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigator';
import auth from '@react-native-firebase/auth';

const App = () => {
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
    <NavigationContainer>
      <UserContext.Provider value={user}>
        <Navigator />
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
