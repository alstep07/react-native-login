/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from './style';
import dorjerImage from '../../../assets/images/dorjer.png';

const Timer = ({value, isPaused}) => {
  const imageOpacity = isPaused ? 0 : 0.3;
  const timerOpacity = isPaused ? 0.2 : 1;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={dorjerImage}
        imageStyle={{opacity: imageOpacity}}
        resizeMode="contain">
        <Text style={{...styles.timer, opacity: timerOpacity}}>{value}</Text>
      </ImageBackground>
    </View>
  );
};

export default Timer;
