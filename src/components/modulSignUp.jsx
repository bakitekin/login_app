//import libraries
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {Appcolors} from '../theme/Appcolors';
import GlobalTextInput from './globalTextInput';
import GlobalButton from './globalButton';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../router/router';

// create a component
const ModulSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Form validation
    if (name === '') {
      Alert.alert('Validation Error', 'Name is required');
      return;
    }
    if (email === '') {
      Alert.alert('Validation Error', 'Email is required');
      return;
    }
    if (password === '') {
      Alert.alert('Validation Error', 'Password is required');
      return;
    }

    console.log('Submitting form:', {name, email, password});

    // Reset fields after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  const SignUp = () => {
    navigation.navigate(LOGIN);
  };

  return (
    <View style={styles.container}>
      <GlobalTextInput
        labelText="Full Name"
        secureTextEntry={false}
        keyboardType="default"
        returnKeyType="next"
        autoCapitalize="words"
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />
      <GlobalTextInput
        labelText="Email Address"
        secureTextEntry={false}
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />
      <GlobalTextInput
        labelText="Password"
        secureTextEntry={true}
        keyboardType="default"
        returnKeyType="done"
        autoCapitalize="none"
        placeholder="Enter your password"
        onChangeText={setPassword}
        value={password}
      />
      <GlobalButton title="Sign Up" onPress={handleSignUp} />

      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or</Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconsContainer}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsContainer}>
          <Image source={require('../assets/apple.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsContainer}>
          <Image
            source={require('../assets/facebook.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={SignUp}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.white,
    width: '100%',
    padding: 20,
    marginTop: '60%',
    borderRadius: 60,
  },
  orContainer: {
    marginVertical: 20,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 10,
  },
  iconsContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Appcolors.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: Appcolors.warning,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ModulSignUp;
