import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../common/theme';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={{...styles.container, width: ITEM_WIDTH}} key={index}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
      <Icon name="play" size={14} color={theme.colors.pinkAccent} />
    </View>
  );
};

export default CarouselCardItem;
