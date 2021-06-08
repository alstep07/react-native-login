import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default Title;
