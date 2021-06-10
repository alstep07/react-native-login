import React, {useState, useEffect} from 'react';
import {UserContext} from './context';
import {getUserFromDB} from './services/firestore';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './navigation';
import auth from '@react-native-firebase/auth';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});

  const onAuthStateChanged = newUser => {
    setUser(newUser);
    initializing && setInitializing(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const userFromDB = await getUserFromDB(user.uid);
      setUserData(userFromDB);
    };
    user && getUser();
  }, [user]);

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
      <UserContext.Provider value={userData}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {user ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Sign Up" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
