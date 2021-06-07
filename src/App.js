import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = newUser => {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const createNewUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  if (initializing) return null;

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {user ? (
          <>
            <Text style={styles.title}>Wellcome {user.email}</Text>
            <Pressable style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
          </>
        ) : (
          <>
            <TextInput
              onChangeText={handleEmailChange}
              value={email}
              placeholder="email"
            />
            <TextInput
              onChangeText={handlePasswordChange}
              value={password}
              placeholder="password"
            />
            <Pressable style={styles.button} onPress={createNewUser}>
              <Text style={styles.buttonText}>Create user</Text>
            </Pressable>
          </>
        )}
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
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 22,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#fff',
  },
});

export default App;
