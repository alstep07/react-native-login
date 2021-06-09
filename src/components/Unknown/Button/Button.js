import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../../common/theme';

const Button = ({title, onPress}) => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[theme.colors.buttonGradientFrom, theme.colors.buttonGradientTo]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;
