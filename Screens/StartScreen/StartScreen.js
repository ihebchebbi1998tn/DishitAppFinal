import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }) { // Receive navigation prop
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={{ uri: 'https://i.ibb.co/GHWwqpz/Design-sans-titre.png' }} // Placeholder image
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Together we feast</Text>
          <Text style={styles.subHeading}>
            by sharing<Text style={styles.underline}> more!</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('SignupScreen')} // Navigate to RegisterScreen
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)', // To create a dimming effect
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: '23%',
    left: '8%',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Roboto', // Use Roboto font
  },
  subHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Roboto', // Use Roboto font
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#FF6B00',
    fontFamily: 'Roboto', // Use Roboto font
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#FF6B00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '95%',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Use Roboto font
  },
  registerButton: {
    borderWidth: 2,
    borderColor: '#FF6B00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '95%',
  },
  registerButtonText: {
    color: '#FF6B00',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Use Roboto font
  },
});
