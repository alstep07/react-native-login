import React from 'react';
import LibraryScreen from '../components/LibraryScreen';
import {getCurrentDate} from '../utils/helpers';

const listData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b9',
    title: 'First Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    subtitle: 'Subtitle',
    duration: '7 min',
  },
];

const Library = () => {
  const currentDate = getCurrentDate();

  return <LibraryScreen listData={listData} currentDate={currentDate} />;
};

export default Library;
