import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {login} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';
import Notification from '../components/Notification';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
});
