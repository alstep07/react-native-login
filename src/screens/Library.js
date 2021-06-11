import React, {useState, useEffect} from 'react';
import LibraryScreen from '../components/LibraryScreen';
import {getCurrentDate} from '../utils/helpers';
import {getMeditationsFromDB} from '../services/store/meditation';

const Library = () => {
  const [meditations, setMeditations] = useState([]);
  const currentDate = getCurrentDate();

  useEffect(() => {
    const getMeditations = async () => {
      const meditationsFromDB = await getMeditationsFromDB();
      setMeditations(meditationsFromDB);
    };
    getMeditations();
  }, []);

  return <LibraryScreen listData={meditations} currentDate={currentDate} />;
};

export default Library;
