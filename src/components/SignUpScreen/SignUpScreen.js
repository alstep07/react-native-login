import React, {useState} from 'react';
import {View} from 'react-native';
import Typography from '../Unknown/Typography/Typography';
import Button from '../Unknown/Button/Button';
import Input from '../Unknown/Input/Input';
import Notification from '../Unknown/Notification/Notification';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import theme from '../../common/theme';

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
    <LinearGradient
      colors={[theme.colors.background, theme.colors.bgGradientTo]}
      style={styles.container}
      start={{x: 0, y: 0.4}}
      end={{x: 1, y: 0.6}}>
      <View style={styles.titleContainer}>
        <Typography text="Create an Account" />
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
    </LinearGradient>
  );
};

export default SignUpScreen;
