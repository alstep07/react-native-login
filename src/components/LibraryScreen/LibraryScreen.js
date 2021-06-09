import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const getFormattedDate = dateObject => {
  const [day, month, date] = dateObject.toDateString().split(' ');
  return [day, date, month].join(' ');
};

const LibraryScreen = () => {
  const today = getFormattedDate(new Date());
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{today}</Text>
    </View>
  );
};

export default LibraryScreen;
