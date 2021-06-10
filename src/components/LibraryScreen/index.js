import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import CarouselCards from './Carousel';
import styles from './style';
import backgroundImage from '../../assets/images/card.png';
import dorjerImage from '../../assets/images/dorjer.png';

const LibraryScreen = ({listData, currentDate}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="stretch">
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.title}>Let's work on your intention</Text>
        <View style={styles.dorjer}>
          <Image source={dorjerImage} />
        </View>
      </ImageBackground>
      <CarouselCards listData={listData} />
    </View>
  );
};

export default LibraryScreen;
