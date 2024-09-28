//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';
import GoBackButton from '../../components/goBackButton';

// create a component
const Profile = () => {
  return (
    <View style={styles.container}>
      <GoBackButton />
      <Text style={styles.text}>Profile</Text>
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
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Appcolors.warning,
  },
});

//make this component available to the app
export default Profile;
