import React, {useState} from 'react';
import {View} from 'react-native';
import Title from '../Unknown/Title/Title';
import Button from '../Unknown/Button/Button';
import Input from '../Unknown/Input/Input';
import Notification from '../Unknown/Notification/Notification';
import styles from './style';

const SignUpScreen = ({navigateToLoginScreen, validateAndCreateUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onEmailInputChange = text => {
    setEmail(text);
  };

  const onPasswordInputChange = text => {
    setPassword(text);
  };

  const onUsernameInputChange = text => {
    setUsername(text);
  };

  const handleSubmit = () => {
    validateAndCreateUser(email, password, username);
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text="Create an Account" />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          value={email}
          onChangeText={onEmailInputChange}
          placeholder="Email"
          icon="envelope"
        />
        <Input
          value={username}
          onChangeText={onUsernameInputChange}
          placeholder="Name"
          icon="info-circle"
        />
        <Input
          value={password}
          onChangeText={onPasswordInputChange}
          placeholder="Password"
          icon="lock"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit} title="Sign Up" />
        <Notification
          text="Already have an account?"
          buttonTitle="Log In"
          onPress={navigateToLoginScreen}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
