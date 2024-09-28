import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import {HOME, LOGIN, PROFİLE, SİGNUP} from '../router/router';
import SignUp from '../screens/signup';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={SİGNUP} component={SignUp} />
        <Stack.Screen name={PROFİLE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
