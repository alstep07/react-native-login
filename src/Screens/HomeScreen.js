import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {logout} from '../services/loginService';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';

export const HomeScreen = ({navigation, username}) => {
  const handlePress = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={logo} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
  },
  userContainer: {
    marginTop: 80,
    flex: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  username: {
    padding: 8,
    minWidth: 140,
    marginTop: -17,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '700',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 22,
    elevation: 10,
  },
});
