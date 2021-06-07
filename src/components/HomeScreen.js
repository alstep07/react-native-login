import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {logout} from '../services/loginService';

const HomeScreen = ({userEmail}) => {
  return (
    <>
      <Text>{userEmail}</Text>
      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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
