import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();


// Create an empty component for each screen
const EmptyComponent = () => null;

const FooterNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const currentScreen = e.data.state.routes[e.data.state.index].name;
      console.log(`User is in ${currentScreen} screen`);
    });
  
    return unsubscribe;
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF6B00', // Active tab color
        tabBarInactiveTintColor: '#8E8E93', // Inactive tab color
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={EmptyComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('HomeScreen');
          },
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={EmptyComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CommunityScreen');
          },
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="earth-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={EmptyComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('MapScreen');
          },
        }}
        options={{
          tabBarIcon: () => (
            <View style={styles.cartIconContainer}>
              <Icon name="map-outline" size={25.2} color="white" />
            </View>
          ),
          tabBarLabel: '', // Hide label for Cart tab
        }}
      />
      <Tab.Screen
        name="Info"
        component={EmptyComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Info');
          },
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" size={25.2} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmptyComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('SettingsScreen');
          },
        }}
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
    fontSize: 12.6,
    marginTop: 2,
  },
  cartIconContainer: {
    backgroundColor: '#FF6B00',
    width: 57.75,
    height: 57.75,
    borderRadius: 28.875, // Half of width/height for perfect circle
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
