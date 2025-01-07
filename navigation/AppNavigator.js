import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useClerk } from '@clerk/clerk-expo';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import ForgetScreen from '../Screens/ForgetScreen/ForgetScreen';
import StartScreen from '../Screens/StartScreen/StartScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SignUpGmail from '../Screens/ContinueSignupScreen/SignUpGmail';
import ScreenHome from '../Screens/ScreenHome';

const Stack = createStackNavigator();

function HeaderRightSignOut({ navigation }) {
  const { signOut } = useClerk(); // Initialize Clerk's signOut method

  const handleSignOut = async () => {
    // Clear user data from AsyncStorage
    await AsyncStorage.removeItem('userData');

    // Sign out from Clerk
    await signOut();

    // Navigate back to Login screen
    navigation.navigate('Login');
  };

}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
    >
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="ForgetScreen"
        component={ForgetScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="ScreenHome"
        component={ScreenHome}
        options={{ headerShown: false }} // Hide header for this screen
      />
      <Stack.Screen
        name="SignUpGmail"
        component={SignUpGmail}
        options={{ headerShown: false }} // Hide header for this screen
      />
    </Stack.Navigator>
  );
}
