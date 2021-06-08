import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 22,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#fff',
  },
});

export default Button;
