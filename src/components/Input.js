import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#a3a3a3"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 7,
    borderBottomColor: '#8a898e',
    borderBottomWidth: 1,
  },
});

export default Input;
