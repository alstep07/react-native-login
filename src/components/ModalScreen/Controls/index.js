import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomIcon} from '../../Unknown';

const Controls = ({onPausePress, isPaused}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <CustomIcon name="backward" size={20} color="#fff" />
      </Pressable>
      <Pressable onPress={onPausePress}>
        <Icon
          name={isPaused ? 'ios-play-circle-sharp' : 'md-pause-circle-sharp'}
          size={80}
          color="#fff"
        />
      </Pressable>
      <Pressable>
        <CustomIcon name="forward" size={20} color="#fff" />
      </Pressable>
    </View>
  );
};

export default Controls;
