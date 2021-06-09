import React, {useState, useEffect} from 'react';
import {UserContext} from './context';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import SignUpScreen from './components/SignUpScreen/SignUpScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {getUserNameFromDB} from './services/firestore';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

  const onAuthStateChanged = newUser => {
    setUser(newUser);

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    if (user) {
      const getUserName = async () => {
        const userNameFromDB = await getUserNameFromDB(user.uid);
        console.log(userNameFromDB);
        setUserName(userNameFromDB);
      };
      getUserName();
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

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UserContext.Provider value={userName}>
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
