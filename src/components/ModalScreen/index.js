import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './style';
import backgroundImage from '../../assets/images/modal_bg.png';
import ModalHeader from './ModalHeader';
import Timer from './Timer';
import Controls from './Controls';
import {getTimerValues} from '../../utils/helpers';

const ModalScreen = ({
  title,
  subtitle,
  soundCurrentTime,
  modalClose,
  isPaused,
  duration,
  onPausePress,
  onForwardPress,
  onBackwardPress,
  onSliderChange,
}) => {
  const timerValue = getTimerValues(duration - soundCurrentTime);

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode="stretch">
      <ModalHeader title={title} subtitle={subtitle} modalClose={modalClose} />
      <Timer value={timerValue} />
      <Controls
        isPaused={isPaused}
        onPausePress={onPausePress}
        onForwardPress={onForwardPress}
        onBackwardPress={onBackwardPress}
        title={isPaused ? 'Play' : 'Pause'}
        duration={duration}
        soundCurrentTime={soundCurrentTime}
        onSliderChange={onSliderChange}
      />
    </ImageBackground>
  );
};

export default ModalScreen;
