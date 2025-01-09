import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Wagyu Burger",
      distance: 1.2,
      prepTime: "20-25 min",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      tags: ["Popular", "Trending"],
    },
    {
      id: 2,
      name: "Poke Bowl",
      distance: 0.8,
      prepTime: "15-20 min",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      tags: ["Healthy", "New"],
    },
    {
      id: 3,
      name: "Truffle Pasta",
      distance: 1.5,
      prepTime: "25-30 min",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      tags: ["Premium"],
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nearby Food</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuItems.map((item) => (
          <Card key={item.id} style={styles.foodCard}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <View style={styles.tagContainer}>
                {item.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.foodContent}>
              <Text style={styles.foodName}>{item.name}</Text>
              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Icon name="map-marker" size={14} color="#4CAF50" />
                  <Text style={styles.infoText}>{item.distance} km</Text>
                </View>
                <View style={styles.infoItem}>
                  <Icon name="clock-outline" size={14} color="#666" />
                  <Text style={styles.infoText}>{item.prepTime}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.claimButton}>
                <Text style={styles.claimButtonText}>Claim Now</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  foodCard: {
    width: 220,
    marginRight: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  foodImage: {
    width: '100%',
    height: 140,
  },
  tagContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: 'rgba(255, 107, 0, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  foodContent: {
    padding: 12,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  claimButton: {
    backgroundColor: '#FF6B00',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  claimButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default FoodMenu;
