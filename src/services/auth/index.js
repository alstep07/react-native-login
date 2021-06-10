import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {addUserToFirestore} from '../store/user';

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.error(error);
  }
  console.log('User signed out!');
};

export const createNewUser = async (email, password, displayName) => {
  try {
    const newUserInfo = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    const {uid} = newUserInfo.user;

    await addUserToFirestore(uid, displayName);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }
    console.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const userInfo = await auth().signInWithEmailAndPassword(email, password);
    console.log(`User ${userInfo.user.displayName} signed in successfully`);
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      Alert.alert('Email address is invalid!');
    }
    if (error.code === 'auth/user-not-found') {
      Alert.alert('There is no user with such email');
    }
    if (error.code === 'auth/wrong-password') {
      Alert.alert('Wrong password');
    }
    console.error(error.message);
  }
};
