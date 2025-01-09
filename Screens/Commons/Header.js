import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.userInfo}>
          {/* Profile Picture */}
          <Image 
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' }}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.username}>Iheb Chebbi</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.notificationWrapper}>
            <IconButton icon="bell-outline" size={24} style={styles.iconButton} />
            <View style={styles.notificationDot} />
          </View>
          <IconButton icon="account-eye-outline" size={24} style={styles.iconButton} />
        </View>
      </View>

      {/* Search Bar */}
      <Searchbar
        placeholder="Search for meals or NGOs..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        iconColor="#FF6B00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#757575',
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 6,
  },
  notificationWrapper: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B00',
  },
  searchBar: {
    borderRadius: 8,
    backgroundColor: '#EFEFEF',
    elevation: 0,
  },
});

export default Header;
