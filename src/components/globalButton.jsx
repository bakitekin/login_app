//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Appcolors} from '../theme/Appcolors';

// create a component
const GlobalButton = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: Appcolors.warning,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    paddingVertical: 10,
  },
  buttonText: {
    color: Appcolors.black,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

//make this component available to the app
export default GlobalButton;
