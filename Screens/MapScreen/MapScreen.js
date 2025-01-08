import React, { useState } from 'react';
import {  StyleSheet, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { mapCustomStyle } from './mapStyle';
import FilterModal from './FilterModal'; // Import the modal component
import Header from '../Commons/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MapScreen() {
  const [showZones, setShowZones] = useState(true);
  const [showPins, setShowPins] = useState(true);
  const [isVisible, setIsVisible] = useState(false);  // Initially hidden modal
  const [inputText, setInputText] = useState(''); // To store input text

  const montrealRegion = {
    latitude: 45.5017,
    longitude: -73.5673,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const zones = [
    {
      id: 1,
      coordinates: [
        { latitude: 45.50884, longitude: -73.58781 },
        { latitude: 45.50529, longitude: -73.5625 },
        { latitude: 45.49476, longitude: -73.5652 },
        { latitude: 45.49242, longitude: -73.58674 },
      ],
      markerPosition: { latitude: 45.505, longitude: -73.577 },
    },
  ];

  const handleClose = () => {
    setIsVisible(false);  // Close the modal
  };

  const handleFilterPress = () => {
    setIsVisible(true);  // Open the modal
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={montrealRegion}
          customMapStyle={mapCustomStyle}  // Use the imported map styles
        >
          {showZones &&
            zones.map((zone) => (
              <React.Fragment key={zone.id}>
                <Polygon
                  coordinates={zone.coordinates}
                  fillColor="rgba(255, 107, 0, 0.3)"
                  strokeColor="#ff6b00"
                  strokeWidth={2}
                />
                {showPins && (
                  <Marker coordinate={zone.markerPosition}>
                    <MaterialCommunityIcons name="map-marker" size={32} color="#FF6B00" />
                  </Marker>
                )}
              </React.Fragment>
            ))}
        </MapView>

       
        <View style={styles.floatingInputContainer}>
          <TextInput
            style={styles.floatingInput}
            placeholder="Enter location"
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor="#B0B0B0"
          />
        </View>

        {/* Action buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.fab}>
            <MaterialCommunityIcons name="plus" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterFab} onPress={handleFilterPress}>
            <MaterialCommunityIcons name="filter" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <FilterModal
          isVisible={isVisible}
          showZones={showZones}
          showPins={showPins}
          setShowZones={setShowZones}
          setShowPins={setShowPins}
          onClose={handleClose}
        />
      </SafeAreaView>
      <View style={styles.footerContainer}>
        <FooterNavigator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // Ensures the map takes up all available space
  },
  floatingInputContainer: {
    position: 'absolute',
    top: '7%',  // Adjust the position as necessary
    left: 16,
    right: 16,
    zIndex: 2,
  },
  floatingInput: {
    backgroundColor: '#fff',  // Solid background color
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,  // For Android shadow
    borderWidth: 1,
    borderColor: '#D0D0D0',  // Subtle border to make it look defined
  },
  actionButtons: {
    position: 'absolute',
    bottom: '10%', // Adjusted space to avoid overlap with the footer
    right: '5%',
    zIndex: 1,
  },
  fab: {
    backgroundColor: '#FF6B00',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  filterFab: {
    backgroundColor: '#FF6B00',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
