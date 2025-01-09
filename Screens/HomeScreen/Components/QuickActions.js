import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'; // Add View import
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuickActions = () => {
  return (
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="food-apple" size={24} color="#FF6B00" />
        <Text style={styles.actionText}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="map-marker" size={24} color="#FF6B00" />
        <Text style={styles.actionText}>Find NGOs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="history" size={24} color="#FF6B00" />
        <Text style={styles.actionText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  actionButton: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 10,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
});

export default QuickActions;
