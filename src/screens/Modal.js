import React, {useState} from 'react';
import ModalScreen from '../components/ModalScreen';
import Video from 'react-native-video';
import {getTimerValues} from '../utils/helpers';

const Modal = ({route, navigation}) => {
  const {title, subtitle, sound, duration} = route.params;
  const [isPaused, setIsPaused] = useState(false);
  const [timerValue, setTimerValue] = useState('');

  const onProgress = e => {
    const timeLeft = duration - e.currentTime;
    const formattedTimeLeft = getTimerValues(timeLeft);
    setTimerValue(formattedTimeLeft);
  };

  const onPausePress = () => {
    setIsPaused(paused => !paused);
  };
  const modalClose = () => {
    navigation.navigate('Library');
  };

  return (
    <>
      <Video source={{uri: sound}} paused={isPaused} onProgress={onProgress} />
      <ModalScreen
        title={title}
        subtitle={subtitle}
        timerValue={timerValue}
        modalClose={modalClose}
        onPausePress={onPausePress}
        isPaused={isPaused}
      />
    </>
  );
};

export default Modal;
