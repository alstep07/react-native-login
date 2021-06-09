import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const Typography = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Typography;
