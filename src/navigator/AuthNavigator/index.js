import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
