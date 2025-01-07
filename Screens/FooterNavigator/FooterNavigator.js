import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true, // Show labels for all tabs
        tabBarActiveTintColor: '#F4811F',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => <View />} // Empty view for design
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={() => <View />} // Empty view for design
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="location-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={() => <View />} // Empty view for design
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.cartIconContainer}>
              <Icon name="map-outline" size={29.4} color="white" />
            </View>
          ),
          tabBarLabel: '', // Hide label for Cart tab
        }}
      />
      <Tab.Screen
        name="Info"
        component={() => <View />} // Empty view for design
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <View />} // Empty view for design
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={25.2} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabLabel: {
    fontSize: 12.6, // Increased by 5% (12 -> 12.6)
    marginTop: 2,  // Add some margin for spacing between text and icon
  },
  cartIconContainer: {
    backgroundColor: '#F4811F',
    width: 57.75, // Increased by 5% (55 -> 57.75)
    height: 57.75, // Increased by 5% (55 -> 57.75)
    borderRadius: 28, // Increased by 5% (25 -> 28)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default FooterNavigator;
