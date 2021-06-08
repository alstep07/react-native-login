import React, {useState} from 'react';
import {login} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login(email, password);
    setEmail('');
    setPassword('');
  };

  const onEmailInputChange = text => {
    setEmail(text);
  };

  const onPasswordInputChange = text => {
    setPassword(text);
  };

  return (
    <>
      <Title text="Wellcome Back" />
      <Input
        value={email}
        onChangeText={onEmailInputChange}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={onPasswordInputChange}
        placeholder="Password"
      />
      <Button onPress={handleSubmit} title="Log In" />
    </>
  );
};
