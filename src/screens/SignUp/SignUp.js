import React from 'react';
import {Alert} from 'react-native';
import {createNewUser} from '../../services/auth';
import SignUpScreen from '../../components/SignUpScreen/SignUpScreen';

const SignUp = ({navigation}) => {
  const validateAndCreateUser = async (email, password, username) => {
    if (!email) {
      Alert.alert('Email is required');
      return;
    } else if (!password || password.length < 5) {
      Alert.alert('Weak password, minimum 5 chars');
      return;
    } else if (!username) {
      Alert.alert('Name is required');
      return;
    }

    try {
      await createNewUser(email, password, username);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <SignUpScreen
      validateAndCreateUser={validateAndCreateUser}
      navigateToLoginScreen={navigateToLoginScreen}
    />
  );
};

export default SignUp;
