import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');

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

    await usersCollection.doc(uid).set({
      name: displayName,
    });

    console.log(`User ${displayName} added to firestore`);
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
