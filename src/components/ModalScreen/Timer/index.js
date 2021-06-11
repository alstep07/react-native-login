import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from './style';
import dorjerImage from '../../../assets/images/dorjer.png';

const Timer = ({value}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={dorjerImage}
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{opacity: 0.3}}
        resizeMode="contain">
        <Text style={styles.timer}>{value}</Text>
      </ImageBackground>
    </View>
  );
};

export default Timer;
