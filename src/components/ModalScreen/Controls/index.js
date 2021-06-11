import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const Controls = ({onPausePress, title}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPausePress}>
        <Text style={styles.button}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Controls;
