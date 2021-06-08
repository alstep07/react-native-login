import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const Notification = ({text, buttonTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.link}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default Notification;
