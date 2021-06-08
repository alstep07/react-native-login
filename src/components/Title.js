import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '500',
  },
});

export default Title;
