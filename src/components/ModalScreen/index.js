import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import styles from './style';
import backgroundImage from '../../assets/images/modal_bg.png';
import {getTimerValues} from '../../utils/helpers';
import ModalHeader from './ModalHeader';
import Timer from './Timer';
import Controls from './Controls';
import Video from 'react-native-video';

const ModalScreen = ({meditation, modalClose}) => {
  const {title, subtitle, duration, sound} = meditation;
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

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode="stretch">
      <ModalHeader title={title} subtitle={subtitle} modalClose={modalClose} />
      <Timer value={timerValue} />
      <Controls
        onPausePress={onPausePress}
        title={isPaused ? 'Play' : 'Pause'}
      />
      <Video source={{uri: sound}} paused={isPaused} onProgress={onProgress} />
    </ImageBackground>
  );
};

export default ModalScreen;
