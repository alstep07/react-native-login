/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, Animated} from 'react-native';
import styles from './style';

const LibraryScreen = ({listData, currentDate}) => {
  const screenWidth = Dimensions.get('window').width;
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  // const pan = React.useRef(new Animated.ValueXY()).current;

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 88,
          width: boxWidth,
          padding: 16,
          backgroundColor: '#fff',
          borderRadius: 10,
          shadowColor: '#777',
          shadowRadius: 22,
          elevation: 20,
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{currentDate}</Text>
      <Text style={styles.title}>Let's work on your intention</Text>
      <FlatList
        horizontal
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{
          position: 'absolute',
          top: 300,
          height: 250,
          width: screenWidth,
        }}
        contentContainerStyle={{paddingVertical: 16}}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        snapToInterval={boxWidth}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance,
        }}
        contentOffset={{x: halfBoxDistance * -1, y: 0}}
        onLayout={e => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
        // onScroll={Animated.event([{nativeEvent: {contentOffset: {x: pan.x}}}], {
        //   useNativeDriver: false,
        // })}
      />
    </View>
  );
};

export default LibraryScreen;
