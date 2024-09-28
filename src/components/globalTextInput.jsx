//import libraries
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Appcolors} from '../theme/Appcolors';

// create a component
const GlobalTextInput = ({
  labelText = 'Label Text',
  secureTextEntry = false,
  keyboardType = 'default',
  returnKeyType = 'done',
  autoCapitalize,
  onChangeText,
  value,
  placeholder,
  style,
  errorText,
  successText,
}) => {
  return (
    <View style={[styles.container, style]}>
      {labelText && (
        <View style={styles.labelContainer}>
          <Text style={styles.labeltext}>{labelText}</Text>
        </View>
      )}
      <View style={styles.textInputContainer}>
        <TextInput
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
      {successText && <Text style={styles.successText}>{successText}</Text>}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  textInputContainer: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: Appcolors.lightgray,
  },
  textInput: {
    fontSize: 14,
    color: Appcolors.black,
  },
  labelContainer: {
    marginBottom: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  labeltext: {
    fontSize: 14,
    color: Appcolors.black,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
});

//make this component available to the app
export default GlobalTextInput;
