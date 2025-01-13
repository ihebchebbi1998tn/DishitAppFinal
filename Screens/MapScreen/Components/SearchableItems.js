import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const getRandomImage = () =>
  `https://picsum.photos/seed/${Math.random()}/200/120`;

const SearchableItems = () => {
  const carouselData = [
    {
      id: '1',
      name: 'Restaurant A',
      distance: '2.5',
      description: 'Delicious Italian food with authentic recipes.',
      rating: 4.5,
      price: '$$',
      isOpen: true,
      category: 'Italian',
      deliveryTime: '25-35',
      favorite: false,
    },
    {
      id: '2',
      name: 'Restaurant B',
      distance: '1.2',
      description: 'Fresh sushi and quality ingredients.',
      rating: 4.2,
      price: '$$$',
      isOpen: false,
      category: 'Sushi',
      deliveryTime: '15-25',
      favorite: false,
    },
    {
      id: '3',
      name: 'Restaurant C',
      distance: '3.8',
      description: 'Authentic Indian flavors with rich spices.',
      rating: 4.8,
      price: '$',
      isOpen: true,
      category: 'Indian',
      deliveryTime: '30-40',
      favorite: true,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FontAwesome
        key={i}
        name={i < rating ? 'star' : 'star-o'}
        size={14}
        color={i < rating ? '#FFA500' : '#BDC3C7'}
      />
    ));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: getRandomImage() }} style={styles.carouselImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <MaterialIcons
            name={item.favorite ? 'favorite' : 'favorite-border'}
            size={20}
            color="orange"
          />
        </TouchableOpacity>
        {item.isOpen ? (
          <View style={styles.openBadge}>
            <Text style={styles.openText}>OPEN</Text>
          </View>
        ) : (
          <View style={[styles.openBadge, styles.closedBadge]}>
            <Text style={styles.closedText}>CLOSED</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.ratingContainer}>{renderStars(item.rating)}</View>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.footerContainer}>
          <View style={styles.distanceContainer}>
            <MaterialIcons name="location-on" size={14} color="orange" />
            <Text style={styles.distance}>{item.distance} km</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <MaterialIcons name="delivery-dining" size={14} color="green" />
            <Text style={styles.deliveryTime}>{item.deliveryTime} mins</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={carouselData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
  },
  itemContainer: {
    width: 220,
    height: '27%', // Fixed height
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    elevation: 3,
  },
  openBadge: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
  },
  closedBadge: {
    backgroundColor: '#FF5252',
  },
  openText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  closedText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2D3436',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: '#636E72',
    marginBottom: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    marginLeft: 3,
    fontSize: 12,
    color: '#636E72',
  },
  deliveryTime: {
    marginLeft: 3,
    fontSize: 12,
    color: '#636E72',
  },
});

export default SearchableItems;
