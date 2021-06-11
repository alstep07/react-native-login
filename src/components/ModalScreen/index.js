import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './style';
import backgroundImage from '../../assets/images/modal_bg.png';
import ModalHeader from './ModalHeader';
import Timer from './Timer';
import Controls from './Controls';

const ModalScreen = ({
  title,
  subtitle,
  timerValue,
  modalClose,
  onPausePress,
  isPaused,
}) => {
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
        title={isPaused ? 'Play' : 'Pause'}
      />
    </ImageBackground>
  );
};

export default ModalScreen;
