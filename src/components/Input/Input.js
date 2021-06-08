import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

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

export default Input;
