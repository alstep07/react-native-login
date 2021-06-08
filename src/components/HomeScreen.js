import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {logout} from '../services/loginService';
import logo from '../assets/images/logo.png';

const HomeScreen = ({username}) => {
  const handlePress = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <Image source={logo} />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
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
});

export default HomeScreen;
