import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const ModalHeader = ({title, subtitle, modalClose}) => {
  return (
    <View>
      <Pressable onPress={modalClose}>
        <Text>
          <Icon name="close-outline" size={30} color="#fff" />
        </Text>
      </Pressable>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ModalHeader;
