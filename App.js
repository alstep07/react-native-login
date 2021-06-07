import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    setUser(user);
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

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome {user.email}</Text>
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
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={createNewUser}>
          <Text style={styles.buttonText}>Create user</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={createNewUser}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
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
    marginVertical: 10,
    width: 200,
    backgroundColor: 'tomato',
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default App;
