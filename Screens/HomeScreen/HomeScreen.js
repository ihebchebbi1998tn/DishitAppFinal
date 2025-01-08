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
import { Card, Button, Searchbar, Avatar, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Commons/Header';
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <View style={styles.impactContainer}>
          <LinearGradient
            colors={['#FF6B00', '#FF8C3B']}
            style={styles.impactCard}
          >
            <Text style={styles.impactTitle}>Your Impact</Text>
            <View style={styles.impactStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2,450</Text>
                <Text style={styles.statLabel}>Meals Shared</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>127</Text>
                <Text style={styles.statLabel}>Lives Touched</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>15</Text>
                <Text style={styles.statLabel}>NGOs Helped</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="food-apple" size={24} color="#FF6B00" />
            <Text style={styles.actionText}>Donate </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="map-marker" size={24} color="#FF6B00" />
            <Text style={styles.actionText}>Find NGOs</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="history" size={24} color="#FF6B00" />
            <Text style={styles.actionText}>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Urgent Needs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((item) => (
            <Card key={item} style={[styles.urgentCard, { width: width * 0.75 }]} >
              <View style={styles.urgentBadge}>
                <Text style={styles.urgentText}>Urgent</Text>
              </View>
              <Image
                source={{ uri: 'https://placeholder.co/200x150' }}
                style={styles.urgentImage}
              />
              <View style={styles.urgentContent}>
                <Text style={styles.urgentTitle}>Orphanage Needs Meals</Text>
                <Text style={styles.urgentDetails}>Need 50 meals by today 6 PM</Text>
                <Button mode="contained" style={styles.helpButton}>Help Now</Button>
              </View>
            </Card>
          ))}
        </ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Campaigns</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>View All</Text>
          </TouchableOpacity>
        </View>
        {[1, 2].map((campaign) => (
          <Card key={campaign} style={styles.campaignCard}>
            <View style={styles.campaignContent}>
              <Image
                source={{ uri: 'https://placeholder.co/100x100' }}
                style={styles.campaignImage}
              />
              <View style={styles.campaignInfo}>
                <Text style={styles.campaignTitle}>Weekend Food Drive</Text>
                <Text style={styles.campaignOrg}>By: Food For All NGO</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: '75%' }]} />
                  </View>
                  <Text style={styles.progressText}>75% Complete</Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest Articles</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((article) => (
            <Card key={article} style={styles.articleCard}>
              <Image
                source={{ uri: 'https://placeholder.co/150x200' }}
                style={styles.articleImage}
              />
              <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>How to Reduce Food Waste</Text>
                <Text style={styles.articlePreview}>Learn about the best practices...</Text>
                <Text style={styles.readMore}>Read More →</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
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
  impactContainer: {
    padding: 16,
  },
  impactCard: {
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  impactTitle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  impactStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#FFF',
  },
  statDivider: {
    height: 24,
    borderLeftWidth: 1,
    borderColor: '#FFF',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  actionButton: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 10,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
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
  urgentCard: {
    marginHorizontal: 8,
    marginTop: 12,
    borderRadius: 12,
  },
  urgentBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF6B00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  urgentText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  urgentImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  urgentContent: {
    padding: 12,
  },
  urgentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  urgentDetails: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  helpButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 8,
  },
  campaignCard: {
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  campaignContent: {
    flexDirection: 'row',
    padding: 16,
  },
  campaignImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  campaignInfo: {
    marginLeft: 16,
    flex: 1,
  },
  campaignTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  campaignOrg: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FF6B00',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'right',
    marginTop: 4,
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
