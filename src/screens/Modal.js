import React, {useState} from 'react';
import ModalScreen from '../components/ModalScreen';
import Video from 'react-native-video';

const Modal = ({route, navigation}) => {
  const {title, subtitle, sound, duration} = route.params;
  const [isPaused, setIsPaused] = useState(false);
  const [soundCurrentTime, setSoundCurrentTime] = useState(0);

  const onProgress = ({currentTime}) => {
    setSoundCurrentTime(currentTime);
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
        duration={duration}
        soundCurrentTime={soundCurrentTime}
        modalClose={modalClose}
        onPausePress={onPausePress}
        isPaused={isPaused}
      />
    </>
  );
};

export default Modal;
