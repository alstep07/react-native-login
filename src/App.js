import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const onAuthStateChanged = newUser => {
      setUser(newUser);
      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [initializing]);

  if (initializing) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          userEmail={user.email}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  title: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default App;
