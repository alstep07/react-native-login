import React from 'react';
import {View, Image, Text} from 'react-native';
import logo from '../../assets/images/logo.png';
import Button from '../Unknown/Button/Button';
import styles from './style';

const ProfileScreen = ({user, handlePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={logo} />
        <Text style={styles.username}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handlePress} />
      </View>
    </View>
  );
};

export default ProfileScreen;
