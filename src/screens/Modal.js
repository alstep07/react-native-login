import React, {useState, useRef} from 'react';
import ModalScreen from '../components/ModalScreen';
import Video from 'react-native-video';

const Modal = ({route, navigation}) => {
  const {title, subtitle, sound, duration} = route.params;
  const [isPaused, setIsPaused] = useState(false);
  const [soundCurrentTime, setSoundCurrentTime] = useState(0);

  const Player = useRef(null);

  const onProgress = ({currentTime}) => {
    setSoundCurrentTime(currentTime);
  };

  const onSeek = ({currentTime, seekTime}) => {
    console.log(currentTime, seekTime);
  };

  const onPausePress = () => {
    setIsPaused(paused => !paused);
  };

  const onForwardPress = () => {
    if (soundCurrentTime + 15 < duration) {
      Player.current.seek(soundCurrentTime + 15, 50);
    } else {
      Player.current.seek(duration, 50);
    }
  };

  const onBackwardPress = () => {
    Player.current.seek(soundCurrentTime - 15, 50);
  };

  const modalClose = () => {
    navigation.navigate('Library');
  };

  const onSliderChange = value => {
    Player.current.seek(Math.floor(value));
  };

  return (
    <>
      <Video
        ref={ref => (Player.current = ref)}
        source={{uri: sound}}
        paused={isPaused}
        onProgress={onProgress}
        onSeek={onSeek}
      />
      <ModalScreen
        title={title}
        subtitle={subtitle}
        duration={duration}
        soundCurrentTime={soundCurrentTime}
        modalClose={modalClose}
        onPausePress={onPausePress}
        onForwardPress={onForwardPress}
        onBackwardPress={onBackwardPress}
        isPaused={isPaused}
        onSliderChange={onSliderChange}
      />
    </>
  );
};

export default Modal;
