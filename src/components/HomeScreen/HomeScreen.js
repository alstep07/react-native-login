import React from 'react';
import {View, Image, Text} from 'react-native';
import {logout} from '../../services/auth';
import logo from '../../assets/images/logo.png';
import Button from '../Unknown/Button/Button';
import styles from './style';

const HomeScreen = ({user}) => {
  const handlePress = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={logo} />
        <Text style={styles.username}>name</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handlePress} />
      </View>
    </View>
  );
};

export default HomeScreen;
