import React, {useState} from 'react';
import {View} from 'react-native';
import Title from '../Unknown/Title/Title';
import Button from '../Unknown/Button/Button';
import Input from '../Unknown/Input/Input';
import Notification from '../Unknown/Notification/Notification';
import styles from './style';

const LoginScreen = ({navigateToSignUpScreen, validateAndLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailInputChange = text => {
    setEmail(text);
  };

  const onPasswordInputChange = text => {
    setPassword(text);
  };

  const handleSubmit = () => {
    validateAndLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text="Wellcome Back" />
      </View>
      <View style={styles.inputsContainer}>
        <Input
          value={email}
          onChangeText={onEmailInputChange}
          placeholder="Email"
          icon="envelope"
        />
        <Input
          value={password}
          onChangeText={onPasswordInputChange}
          placeholder="Password"
          icon="lock"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit} title="Log In" />
        <Notification
          text="Don’t you have an account yet?"
          buttonTitle="Sign Up"
          onPress={navigateToSignUpScreen}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
