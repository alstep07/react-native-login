import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from '../../assets/images/modal_bg.png';

const ModalScreen = ({meditation, modalClose}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode="stretch">
      <Pressable onPress={modalClose}>
        <Text>
          <Icon name="close-outline" size={30} color="#fff" />
        </Text>
      </Pressable>
      <Text style={styles.title}>{meditation.title}</Text>
    </ImageBackground>
  );
};

export default ModalScreen;
