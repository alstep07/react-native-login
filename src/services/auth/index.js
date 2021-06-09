import auth from '@react-native-firebase/auth';
import {addUserToFirestore} from '../firestore';

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
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};

export const login = async (email, password) => {
  try {
    const userInfo = await auth().signInWithEmailAndPassword(email, password);
    console.log(`User ${userInfo.user.displayName} signed in successfully`);
  } catch (error) {
    console.error(error);
  }
};
