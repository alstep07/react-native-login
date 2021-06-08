import auth from '@react-native-firebase/auth';

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
    const newUser = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await newUser.user.updateProfile({displayName: displayName.trim()});
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
    console.log(userInfo);
  } catch (error) {
    console.error(error);
  }
};
