import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const HeaderMap = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation(); // Initialize the navigation hook

  const navigateToNotifications = () => {
    navigation.navigate('NotificationScreen'); // Navigate to the NotificationScreen
  };

  return (
    <SafeAreaView style={[styles.header, { width }]}>
      <View>
        <View style={styles.headerContent}>
          <View style={styles.profileContainer}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBoNHTdNFu-NloeUZS5-L9aWbPTmqkCy-Tg&s' }}
              style={styles.profilePic}
            />
          </View>
          <View style={styles.headerIcons}>
            <View style={styles.iconContainer}>
              <IconButton 
                icon="bell-outline" 
                size={24} 
                onPress={navigateToNotifications} // Attach the onPress handler
              />
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
    top: '5%', // Adjusted the top property to place the header properly
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
