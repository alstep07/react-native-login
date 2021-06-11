import {createContext, useContext} from 'react';

export const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const ModalContext = createContext({});
export const useModalContext = () => useContext(ModalContext);