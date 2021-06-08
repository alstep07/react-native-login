import React, {useState} from 'react';
import {Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {createNewUser} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    createNewUser(email, password, username);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title text="Create an Account" />
      <TextInput
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Name"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
      />
      <Button onPress={handleSubmit} title="Sign Up" />
    </>
  );
};

export default SignUpScreen;
