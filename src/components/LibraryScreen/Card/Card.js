import React from 'react';
import {View, Text, Dimensions, Image, Pressable} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../common/theme';
import {getReadbleTime} from '../../../utils/helpers';
import {useModalContext} from '../../../context';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const CarouselCardItem = ({item, index}) => {
  const duration = getReadbleTime(item.duration);
  const openModal = useModalContext();

  return (
    <Pressable
      onPress={openModal}
      style={{...styles.container, width: ITEM_WIDTH}}
      key={index}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <Icon name="play" size={14} color={theme.colors.pinkAccent} />
    </Pressable>
  );
};

export default CarouselCardItem;
