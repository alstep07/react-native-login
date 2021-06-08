import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({icon, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon
        style={styles.icon}
        name={icon}
        size={icon === 'envelope' ? 16 : 20}
        color="#8A898E"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#8A898E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 11,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 1,
  },
  input: {
    padding: 0,
    fontSize: 16,
    lineHeight: 24,
  },
  icon: {
    width: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Input;
