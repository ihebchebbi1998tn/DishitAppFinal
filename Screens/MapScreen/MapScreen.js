import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { mapCustomStyle } from './mapStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import DraggableSearch from './Components/DraggableSearch';
import HeaderMap from '../Commons/HeaderMap';
import zones from './data/zones'; // Ensure zones are correctly imported
import FloatingLocationButton from './Components/FloatingLocationButton';

export default function MainScreen() {
  const [showZones, setShowZones] = useState(true);
  const [showPins, setShowPins] = useState(true);

  const montrealRegion = {
    latitude: 45.505, // Center of Montreal
    longitude: -73.577,
    latitudeDelta: 0.05, // Smaller value to zoom into the zones
    longitudeDelta: 0.05,
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderMap />
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
                  strokeColor="#893571"
                  strokeWidth={2}
                />
                {showPins && (
                  <Marker coordinate={zone.markerPosition}>
                    <MaterialCommunityIcons name="map-marker" size={32} color="#893571" />
                  </Marker>
                )}
              </React.Fragment>
            ))}
        </MapView>
      </SafeAreaView>

      <DraggableSearch
        onSearch={(query) => console.log('Search query:', query)}
        customStyles={{
          position: 'absolute',
          bottom: '10%',
          backgroundColor: 'white',
        }}
      />
   <FloatingLocationButton />
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
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
