import React from 'react';
import {Alert} from 'react-native';
import {login} from '../services/auth';
import LoginScreen from '../components/LoginScreen/LoginScreen';

const Login = ({navigation}) => {
  const validateAndLogin = async (email, password) => {
    if (!email) {
      Alert.alert('Please, enter your email');
      return;
    } else if (!password) {
      Alert.alert('Please, enter your password');
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      console.error(err.message);
    }
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <LoginScreen
      validateAndLogin={validateAndLogin}
      navigateToSignUpScreen={navigateToSignUpScreen}
    />
  );
};

export default Login;
