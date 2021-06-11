import React from 'react';
import {View, Pressable} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomIcon} from '../../Unknown';

const Controls = ({
  onPausePress,
  onForwardPress,
  onBackwardPress,
  isPaused,
  duration,
  soundCurrentTime,
  onSliderChange,
}) => {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={soundCurrentTime}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#fff"
        onValueChange={onSliderChange}
      />
      <View style={styles.controlsContainer}>
        <Pressable onPress={onBackwardPress}>
          <CustomIcon name="backward" size={20} color="#fff" />
        </Pressable>
        <Pressable onPress={onPausePress}>
          <Icon
            name={isPaused ? 'ios-play-circle-sharp' : 'md-pause-circle-sharp'}
            size={80}
            color="#fff"
          />
        </Pressable>
        <Pressable onPress={onForwardPress}>
          <CustomIcon name="forward" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default Controls;
