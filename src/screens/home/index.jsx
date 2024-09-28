//import libraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalButton from '../../components/globalButton';
import {Appcolors} from '../../theme/Appcolors';
import {LOGIN, PROFİLE, SİGNUP} from '../../router/router';
import {Cardano} from 'iconsax-react-native';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Cardano
          style={styles.iconsaxContainer}
          size="150"
          color={Appcolors.warning}
        />
      </View>

      <View style={styles.button}>
        <GlobalButton
          title="Sign Up"
          onPress={() => navigation.navigate(SİGNUP)}
        />
      </View>
      <View style={styles.button}>
        <GlobalButton
          title="Login"
          onPress={() => navigation.navigate(LOGIN)}
        />
      </View>
      <View style={styles.button}>
        <GlobalButton
          title="Profile"
          onPress={() => navigation.navigate(PROFİLE)}
        />
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
    backgroundColor: Appcolors.primary,
    padding: 5,
  },
  button: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  iconsaxContainer: {
    marginBottom: 40,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Home;
