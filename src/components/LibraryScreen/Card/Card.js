import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './style';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={{...styles.container, width: ITEM_WIDTH}} key={index}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default CarouselCardItem;
