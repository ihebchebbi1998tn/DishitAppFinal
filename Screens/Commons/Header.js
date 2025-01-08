import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.userInfo}>
          {/* Profile Picture */}
          <Image 
            source={{ uri: 'https://img.freepik.com/free-vector/portrait-boy-with-blonde-hair-blue-eyes_1308-157023.jpg' }} // Placeholder image URL
            style={styles.profilePic}
          />
          <View style={styles.welcomeText}>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.username}>John Doe</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <IconButton icon="bell-outline" size={24} style={styles.iconButton} badge={3} />
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
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeText: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 4,
  },
  searchBar: {
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    elevation: 0,
  },
});

export default Header;
