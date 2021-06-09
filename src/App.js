import React, {useState, useEffect} from 'react';
import {UserContext} from './context';
import {getUserNameFromDB} from './services/firestore';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './navigation';
import auth from '@react-native-firebase/auth';
import SignUpScreen from './components/SignUpScreen/SignUpScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const onAuthStateChanged = newUser => {
    setUser(newUser);

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    if (user) {
      const updateUserName = async () => {
        const userNameFromDB = await getUserNameFromDB(user.uid);
        setUsername(userNameFromDB);
      };
      updateUserName();
    }
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
      <UserContext.Provider value={username}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
