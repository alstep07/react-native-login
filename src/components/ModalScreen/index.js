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
  const imageOpacity = isPaused ? 0.8 : 1;

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
          onPausePress={onPausePress}
          onForwardPress={onForwardPress}
          onBackwardPress={onBackwardPress}
          title={isPaused ? 'Play' : 'Pause'}
          duration={duration}
          soundCurrentTime={soundCurrentTime}
          onSliderChange={onSliderChange}
          modalClose={modalClose}
        />
      </ImageBackground>
    </View>
  );
};

export default ModalScreen;
