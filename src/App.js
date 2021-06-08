import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = newUser => {
    setUser(newUser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  console.log(user.displayName);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {user ? <HomeScreen username={user.displayName} /> : <LoginScreen />}
      </View>
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
