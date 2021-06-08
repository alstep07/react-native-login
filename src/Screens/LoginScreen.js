import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {login} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';
import Notification from '../components/Notification';

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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title text="Wellcome Back" />
      </View>
      <View style={styles.inputsContainer}>
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
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit} title="Log In" />
        <Notification
          text="Already have an account?"
          buttonTitle="Log In"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
