import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';

const getFormattedDate = dateObject => {
  const [day, month, date] = dateObject.toDateString().split(' ');
  return [day, date, month].join(' ');
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b9',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
];

const Card = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const LibraryScreen = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const today = getFormattedDate(new Date());

  const renderItem = ({item}) => (
    <Card
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
        width: boxWidth,
        borderRadius: 24,
        backgroundColor: '#999',
      }}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{today}</Text>
      <Text style={styles.title}>Let's work on your intention</Text>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{position: 'absolute', top: 300, height: 250}}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingVertical: 16}}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        snapToInterval={boxWidth}
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance,
        }}
        contentOffset={{x: halfBoxDistance * -1, y: 0}}
        onLayout={e => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
      />
    </View>
  );
};

export default LibraryScreen;
