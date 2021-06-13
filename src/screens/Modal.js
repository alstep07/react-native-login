import React, {useState, useRef} from 'react';
import ModalScreen from '../components/ModalScreen';
import Video from 'react-native-video';

const Modal = ({route, navigation}) => {
  const {title, subtitle, sound} = route.params;
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const Player = useRef(null);

  const modalClose = () => {
    navigation.navigate('Library');
  };

  const handleLoad = meta => {
    setDuration(meta.duration);
  };

  const handleProgress = ({currentTime}) => {
    setProgress(currentTime / duration);
  };

  const handleEnd = () => {
    setIsPaused(true);
  };

  const handlePausePress = () => {
    if (progress >= 0.99) {
      Player.current.seek(0);
    }
    setIsPaused(paused => !paused);
  };

  const handleForwardPress = () => {
    const seekValue = progress * duration + 15;
    if (seekValue >= duration) {
      setProgress(1);
      handleEnd();
    } else {
      Player.current.seek(seekValue);
    }
  };

  const handleBackwardPress = () => {
    Player.current.seek(progress * duration - 15);
  };

  const handleSliderChange = value => {
    Player.current.seek(value * duration);
  };

  return (
    <>
      <Video
        ref={ref => (Player.current = ref)}
        onLoad={handleLoad}
        source={{uri: sound}}
        paused={isPaused}
        onProgress={handleProgress}
        onEnd={handleEnd}
      />
      <ModalScreen
        title={title}
        subtitle={subtitle}
        duration={duration}
        progress={progress}
        modalClose={modalClose}
        handlePausePress={handlePausePress}
        handleForwardPress={handleForwardPress}
        handleBackwardPress={handleBackwardPress}
        isPaused={isPaused}
        handleSliderChange={handleSliderChange}
      />
    </>
  );
};

export default Modal;
