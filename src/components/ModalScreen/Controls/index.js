import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomIcon} from '../../Unknown';

const Controls = ({
  handlePausePress,
  handleForwardPress,
  handleBackwardPress,
  isPaused,
  progress,
  handleSliderChange,
  modalClose,
}) => {
  return (
    <View style={styles.container}>
      {isPaused && (
        <Pressable style={styles.finishButton} onPress={modalClose}>
          <Text style={styles.finishText}>Finish Later</Text>
        </Pressable>
      )}
      <Slider
        style={styles.slider}
        value={progress}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#fff"
        onValueChange={handleSliderChange}
      />
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handleBackwardPress}>
          <CustomIcon name="backward" size={20} color="#fff" />
        </TouchableOpacity>
        <Pressable onPress={handlePausePress}>
          <Icon
            name={isPaused ? 'ios-play-circle-sharp' : 'md-pause-circle-sharp'}
            size={80}
            color="#fff"
          />
        </Pressable>
        <TouchableOpacity onPress={handleForwardPress}>
          <CustomIcon name="forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Controls;
