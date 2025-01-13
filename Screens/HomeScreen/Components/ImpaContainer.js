import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ImpaContainer = () => {
  return (
    <View style={styles.impactContainer}>
      <LinearGradient
        colors={['#893571', '#b8658f']}
        style={styles.impactCard}
      >
        <Text style={styles.impactTitle}>Your Impact</Text>
        <View style={styles.impactStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2,450</Text>
            <Text style={styles.statLabel}>Meals Shared</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>127</Text>
            <Text style={styles.statLabel}>Lives Touched</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>NGOs Helped</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  impactContainer: {
    padding: 16,
  },
  impactCard: {
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  impactTitle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  impactStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#FFF',
  },
  statDivider: {
    height: 24,
    borderLeftWidth: 1,
    borderColor: '#FFF',
  },
});

export default ImpaContainer;
