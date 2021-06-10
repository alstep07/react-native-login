import firestore from '@react-native-firebase/firestore';

const meditationsCollection = firestore().collection('meditations');

export const getMeditationsFromDB = async () => {
  try {
    const meditations = await meditationsCollection.get();
    return meditations.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
  } catch (error) {
    console.error(error);
  }
};
