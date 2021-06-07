import React, {useState} from 'react';
import {Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {createNewUser} from '../services/loginService';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    createNewUser(email, password);
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
  };

  return (
    <>
      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="email"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="password"
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create user</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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

export default LoginScreen;
