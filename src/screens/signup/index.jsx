// SignUp.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ModulSignUp from '../../components/modulSignUp';
import GoBackButton from '../../components/goBackButton';
import {Appcolors} from '../../theme/Appcolors';
import {UserAdd} from 'iconsax-react-native';

// create a component
const SignUp = () => {
  return (
    <View style={styles.container}>
      <GoBackButton />
      <UserAdd
        style={styles.iconsaxContainer}
        size="120"
        color={Appcolors.warning}
      />

      <ModulSignUp />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolors.primary,
  },
  iconsaxContainer: {
    position: 'absolute',
    top: 80,
    left: 140,
    right: 10,
    zIndex: 999,
  },
});

// make this component available to the app
export default SignUp;
