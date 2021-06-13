import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from './context';
import Navigator from './navigator';

const App = () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigator />
      </UserContextProvider>
    </NavigationContainer>
  );
};

export default App;
