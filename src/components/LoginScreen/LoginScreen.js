import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {login} from '../../services/auth';
import Title from '../Unknown/Title/Title';
import Button from '../Unknown/Button/Button';
import Input from '../Unknown/Input/Input';
import Notification from '../Unknown/Notification/Notification';
import styles from './style';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Please, enter your email');
      return;
    } else if (!password || password.length < 5) {
      Alert.alert('Please, enter your password');
      return;
    }

    try {
      await login(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      Alert(err);
    }
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('Sign Up');
  };

  const onEmailInputChange = text => {
    setEmail(text);
  };

  const onPasswordInputChange = text => {
    setPassword(text);
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
