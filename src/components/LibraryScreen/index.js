import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import CarouselCards from './Carousel';
import styles from './style';
import backgroundImage from '../../assets/images/card.png';

const LibraryScreen = ({listData, currentDate}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="stretch">
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.title}>Let's work on your intention</Text>
      </ImageBackground>
      <CarouselCards listData={listData} />
    </View>
  );
};

export default LibraryScreen;
