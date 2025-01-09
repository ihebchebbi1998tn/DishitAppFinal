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
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Commons/Header';
import ImpaContainer from './Components/ImpaContainer';
import QuickActions from './Components/QuickActions';
import UrgentNeedsAndCampaigns from './Components/UrgentNeedsAndCampaigns';
import LatestArticles from './Components/LatestArticles';


export default function HomeScreen() {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
              <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImpaContainer />
        <QuickActions />
        <LatestArticles />
      <UrgentNeedsAndCampaigns />
      
      </ScrollView>
      <FooterNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#FF6B00',
  },
  
  articleCard: {
    width: 150,
    marginHorizontal: 8,
    marginTop: 16,
    borderRadius: 8,
  },
  articleImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  articleContent: {
    padding: 8,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  articlePreview: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  readMore: {
    fontSize: 12,
    color: '#FF6B00',
    marginTop: 8,
  },
});
