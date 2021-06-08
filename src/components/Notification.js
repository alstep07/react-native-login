import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(138, 137, 142, 1)',
  },
  link: {
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: 'underline',
    color: 'rgba(138, 137, 142, 1)',
  },
});

export default Notification;
