//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ModulLogin from '../../components/modulLogin';
import {Appcolors} from '../../theme/Appcolors';
import GoBackButton from '../../components/goBackButton';
import {LoginCurve} from 'iconsax-react-native';

// create a component
const Login = () => {
  return (
    <View style={styles.container}>
      <GoBackButton />

      <LoginCurve
        style={styles.iconsaxContainer}
        size="150"
        color={Appcolors.warning}
      />
      <ModulLogin />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.primary,
  },
  iconsaxContainer: {
    position: 'absolute',
    top: 100,
    left: 130,
    right: 10,
    zIndex: 999,
  },
});

//make this component available to the app
export default Login;
