import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {logout} from '../services/loginService';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';

const HomeScreen = ({username}) => {
  const handlePress = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={logo} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Button title="Logout" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 22,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#fff',
  },
  user: {
    flex: 1,
    alignItems: 'center',
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
    shadowColor: '#000',
  },
});

export default HomeScreen;
