import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderMap = () => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.header, { width }]}>
    <View >
      <View style={styles.headerContent}>
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' }}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconContainer}>
            <IconButton icon="bell-outline" size={24} />
          </View>
          <View style={styles.iconContainer}>
            <IconButton icon="account-eye-outline" size={24} />
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: '&%',
    zIndex: 1000,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HeaderMap;
