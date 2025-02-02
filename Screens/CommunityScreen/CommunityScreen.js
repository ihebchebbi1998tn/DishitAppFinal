import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  View, 
  Image, 
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Commons/Header';
import Cards4 from './Components/Cards4';

export default function CommunityScreen() {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
          <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.communityHeader}>
          <LinearGradient colors={['#893571', '#b8658f']} style={styles.communityBanner}>
            <Text style={styles.bannerText}>Welcome to the Community</Text>
            <Text style={styles.bannerSubText}>Support Local, Share, and Connect</Text>
          </LinearGradient>
        </View>
        <Cards4 />
      </ScrollView>
      <FooterNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
  },
  scrollContainer: {
    paddingBottom: 16,
    padding: 15,
  },
  communityHeader: {
    marginBottom: 16,
  },
  communityBanner: {
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  
});
