import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Animated,
  PanResponder,
  View,
  StyleSheet,
  Text,
  Keyboard,
  Easing,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import SearchableItems from './SearchableItems';  // Import the new component
import { Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_HEIGHT = SCREEN_HEIGHT * 0.6;
const MIN_HEIGHT = 100;

const DraggableSearch = ({ onSearch, customStyles }) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT - MIN_HEIGHT)).current;
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      Animated.spring(translateY, {
        toValue: SCREEN_HEIGHT - MAX_HEIGHT,
        useNativeDriver: false,
        tension: 50,
        friction: 7,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      Animated.spring(translateY, {
        toValue: SCREEN_HEIGHT - MIN_HEIGHT,
        useNativeDriver: false,
        tension: 50,
        friction: 7,
      }).start();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [translateY]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      const address = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      if (address.length > 0) {
        const { city, country, name, region } = address[0];
        setAddress(`${name}, ${city}, ${region}, ${country}`);
      }
    })();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newTranslateY = Math.min(
          Math.max(gestureState.dy + translateY._value, SCREEN_HEIGHT - MAX_HEIGHT),
          SCREEN_HEIGHT - MIN_HEIGHT
        );
        translateY.setValue(newTranslateY);
      },
      onPanResponderRelease: useCallback((_, gestureState) => {
        const { dy } = gestureState;
        const currentY = translateY._value;
        const snapThreshold = (MAX_HEIGHT - MIN_HEIGHT) / 2;

        let targetPosition;
        if (dy < 0 && Math.abs(dy) > snapThreshold) {
          targetPosition = SCREEN_HEIGHT - MAX_HEIGHT;
        } else if (dy > 0 && Math.abs(dy) > snapThreshold) {
          targetPosition = SCREEN_HEIGHT - MIN_HEIGHT;
        } else {
          targetPosition =
            currentY > (SCREEN_HEIGHT - MAX_HEIGHT + SCREEN_HEIGHT - MIN_HEIGHT) / 2
              ? SCREEN_HEIGHT - MIN_HEIGHT
              : SCREEN_HEIGHT - MAX_HEIGHT;
        }

        Animated.timing(translateY, {
          toValue: targetPosition,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }).start();
      }, [translateY]),
    })
  ).current;

 

  return (
    <Animated.View
      style={[styles.draggableContent, { transform: [{ translateY }] }, customStyles]}
      {...panResponder.panHandlers}
    >
      <View style={styles.handleBar} />
      <Searchbar
        placeholder="Search for meals or NGOs..."
        onChangeText={(text) => {
          setSearchQuery(text);
          onSearch?.(text);
        }}
        value={searchQuery}
        style={styles.searchBar}
        iconColor="#FF6B00"
      />
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Your Current Location:</Text>
        <View style={styles.locationContent}>
          <MaterialIcons name="location-on" size={24} color="#FF6B00" />
          <Text style={styles.locationText}>{address || 'Loading location...'}</Text>
        </View>
      </View>
      <SearchableItems /> {/* Use the new component here */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  draggableContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  handleBar: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchBar: {
    borderRadius: 8,
    backgroundColor: '#EFEFEF',
    elevation: 0,
    marginBottom: 20,
  },
  locationContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    flexWrap: 'wrap',
  },
});

export default DraggableSearch;
