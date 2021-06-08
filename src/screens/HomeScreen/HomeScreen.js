import React from 'react';
import {View, Image, Text} from 'react-native';
import {logout} from '../../services/loginService';
import logo from '../assets/images/logo.png';
import Button from '../../components/Button/Button';
import styles from './style';

export const HomeScreen = ({user}) => {
  const handlePress = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={logo} />
        <Text style={styles.username}>{user.displayName}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handlePress} />
      </View>
    </View>
  );
};
