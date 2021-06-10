import React, {useState} from 'react';
import {View} from 'react-native';
import {Typography, Button, Input, Notification} from '../Unknown';
import styles from './style';
import theme from '../../common/theme';
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={[theme.colors.background, theme.colors.bgGradientTo]}
      style={styles.container}
      start={{x: 0, y: 0.4}}
      end={{x: 1, y: 0.6}}>
      <View style={styles.titleContainer}>
        <Typography text="Wellcome Back" />
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
    </LinearGradient>
  );
};

export default LoginScreen;
