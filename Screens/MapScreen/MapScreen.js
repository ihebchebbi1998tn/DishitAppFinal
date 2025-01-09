import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { mapCustomStyle } from './mapStyle';
import FilterModal from './FilterModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButtons from './Components/ActionButtons';
import Header from '../Commons/Header';
import zones from './data/zones';
export default function MapScreen() {
  const [showZones, setShowZones] = useState(true);
  const [showPins, setShowPins] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const montrealRegion = {
    latitude: 45.5017,
    longitude: -73.5673,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const handleClose = () => setIsVisible(false);

  const handleFilterPress = () => setIsVisible(true);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={montrealRegion}
          customMapStyle={mapCustomStyle}
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

        <ActionButtons onPlusPress={() => {}} onFilterPress={handleFilterPress} />
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
    flex: 1,
  },
  floatingInputContainer: {
    position: 'absolute',
    top: '7%',
    left: 16,
    right: 16,
    zIndex: 2,
  },
  floatingInput: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
