import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {createNewUser} from '../services/loginService';
import Title from '../components/Title';
import Button from '../components/Button';
import Input from '../components/Input';
import Notification from '../components/Notification';

export const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async () => {
    try {
      await createNewUser(email, password, username);
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      console.error(error);
    }
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

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
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
