import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FooterNavigator from '../Screens/FooterNavigator/FooterNavigator';
const Stack = createStackNavigator();

const MainLayout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <FooterNavigator /> {/* FooterNavigator will be displayed here */}
    </View>
  );
};

export default MainLayout;
