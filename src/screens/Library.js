import React, {useState, useEffect} from 'react';
import LibraryScreen from '../components/LibraryScreen';
import {getCurrentDate} from '../utils/helpers';
import {getMeditationsFromDB} from '../services/store/meditation';
import {ModalContext} from '../context';

const Library = ({openModal}) => {
  const [meditations, setMeditations] = useState([]);
  const currentDate = getCurrentDate();

  useEffect(() => {
    const getMeditations = async () => {
      const meditationsFromDB = await getMeditationsFromDB();
      setMeditations(meditationsFromDB);
    };
    getMeditations();
  }, []);

  return (
    <ModalContext.Provider value={openModal}>
      <LibraryScreen listData={meditations} currentDate={currentDate} />
    </ModalContext.Provider>
  );
};

export default Library;
