import React, {useState, useEffect} from 'react';
import LibraryScreen from '../components/LibraryScreen';
import {getCurrentDate} from '../utils/helpers';
import {getMeditationsFromDB} from '../services/store/meditation';

const Library = ({navigation}) => {
  const [meditations, setMeditations] = useState([]);
  const currentDate = getCurrentDate();
  const openModal = params => {
    navigation.navigate('Modal', params);
  };

  useEffect(() => {
    const getMeditations = async () => {
      const meditationsFromDB = await getMeditationsFromDB();
      setMeditations(meditationsFromDB);
    };
    getMeditations();
  }, []);

  return (
    <LibraryScreen
      listData={meditations}
      currentDate={currentDate}
      openModal={openModal}
    />
  );
};

export default Library;
