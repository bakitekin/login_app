// GoBackButton.js
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Appcolors} from '../theme/Appcolors';
import {useNavigation} from '@react-navigation/native';

// create a component
const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.goBackContainer}
      accessibilityLabel="Go back"
      activeOpacity={0.7}>
      <Text style={styles.backText}>←</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  goBackContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: Appcolors.warning,
    padding: 10,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 5,
    shadowColor: Appcolors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backText: {
    fontSize: 20,
    color: Appcolors.black,
  },
});

//make this component available to the app
export default GoBackButton;
