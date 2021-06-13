import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './style';
import backgroundImage from '../../assets/images/modal_bg.png';
import ModalHeader from './ModalHeader';
import Timer from './Timer';
import Controls from './Controls';
import {getTimerValues} from '../../utils/helpers';

const ModalScreen = ({
  title,
  subtitle,
  progress,
  modalClose,
  isPaused,
  duration,
  handlePausePress,
  handleForwardPress,
  handleBackwardPress,
  handleSliderChange,
}) => {
  const imageOpacity = isPaused ? 0.8 : 1;
  const timerValue = getTimerValues(duration - progress * duration);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        imageStyle={{opacity: imageOpacity}}
        resizeMode="stretch">
        <ModalHeader
          title={title}
          subtitle={subtitle}
          modalClose={modalClose}
        />
        <Timer value={timerValue} isPaused={isPaused} />
        <Controls
          isPaused={isPaused}
          handlePausePress={handlePausePress}
          handleForwardPress={handleForwardPress}
          handleBackwardPress={handleBackwardPress}
          title={isPaused ? 'Play' : 'Pause'}
          progress={progress}
          handleSliderChange={handleSliderChange}
          modalClose={modalClose}
        />
      </ImageBackground>
    </View>
  );
};

export default ModalScreen;
