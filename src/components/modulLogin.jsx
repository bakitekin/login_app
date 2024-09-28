// Import libraries
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
import {PROFİLE, SİGNUP} from '../router/router';

// Create a component
const ModulLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Simulate authentication
    if (email === 'baki@example.com' && password === 'baki123') {
      navigation.navigate(PROFİLE);
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }

    console.log('Submitting form:', {email, password});

    // Reset fields after submission
    setEmail('');
    setPassword('');
  };

  const handleSignUp = () => {
    navigation.navigate(SİGNUP);
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <GlobalButton title="Login" onPress={handleLogin} />
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
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.white,
    width: '100%',
    padding: 20,
    marginTop: '80%',
    borderRadius: 60,
  },
  forgotPasswordContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: Appcolors.black,
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

export default ModulLogin;
