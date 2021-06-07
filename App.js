import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return <Text style={styles.title}>Create an Account</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default App;
