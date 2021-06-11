import React from 'react';
import ModalScreen from '../components/ModalScreen';

const Modal = ({route, navigation}) => {
  const meditation = route.params;
  const modalClose = () => {
    navigation.navigate('Library');
  };

  return <ModalScreen meditation={meditation} modalClose={modalClose} />;
};

export default Modal;
