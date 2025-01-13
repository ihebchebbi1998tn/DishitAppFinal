import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const FloatingLocationButton = () => {
  const handlePress = () => {
    console.log('Location button pressed');

  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MaterialIcons name="my-location" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '25%', 
    right: '5%', 
    backgroundColor: '#893571', 
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
});

export default FloatingLocationButton;