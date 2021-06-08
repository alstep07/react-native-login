import React, {useState} from 'react';
import {createNewUser} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';

export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    createNewUser(email, password, username);
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const onEmailInputChange = text => {
    setEmail(text);
  };

  const onPasswordInputChange = text => {
    setPassword(text);
  };

  const onUsernameInputChange = text => {
    setUsername(text);
  };

  return (
    <>
      <Title text="Create an Account" />
      <Input
        value={email}
        onChangeText={onEmailInputChange}
        placeholder="Email"
      />
      <Input
        value={username}
        onChangeText={onUsernameInputChange}
        placeholder="Name"
      />
      <Input
        value={password}
        onChangeText={onPasswordInputChange}
        placeholder="Password"
      />
      <Button onPress={handleSubmit} title="Sign Up" />
    </>
  );
};
