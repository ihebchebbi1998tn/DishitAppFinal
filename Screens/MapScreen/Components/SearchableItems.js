import React from 'react';
import { 
  FlatList, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Assuming using Expo

const SearchableItems = () => {
  const carouselData = [
    {
      id: '1',
      src: 'https://via.placeholder.com/150',
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
      src: 'https://via.placeholder.com/150',
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
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? 'star' : 'star-o'}
          size={12} // Reduced size
          color={i <= rating ? '#FFA500' : '#BDC3C7'}
        />
      );
    }
    return stars;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.src }} style={styles.carouselImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <MaterialIcons
            name={item.favorite ? 'favorite' : 'favorite-border'}
            size={20} // Reduced size
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
        <View style={styles.headerRow}>
          <Text style={styles.restaurantName}>{item.name}</Text>
        </View>

        <View style={styles.ratingContainer}>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footerContainer}>
          <View style={styles.distanceContainer}>
            <MaterialIcons
              name="location-on"
              size={14} // Reduced size
              color="orange"
            />
            <Text style={styles.distance}>{item.distance} km</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <MaterialIcons
              name="delivery-dining"
              size={14} // Reduced size
              color="green"
            />
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
    padding: 8, // Reduced padding
  },
  itemContainer: {
    width: 200, // Reduced card width
    backgroundColor: 'white',
    borderRadius: 10, // Reduced radius
    marginRight: 12, // Reduced margin
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.8, // Reduced shadow
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: 120, // Reduced height
    borderTopLeftRadius: 10, // Reduced radius
    borderTopRightRadius: 10, // Reduced radius
  },
  favoriteButton: {
    position: 'absolute',
    right: 8, // Reduced position offset
    top: 8, // Reduced position offset
    backgroundColor: 'white',
    borderRadius: 16, // Reduced radius
    padding: 6, // Reduced padding
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5, // Reduced shadow
    elevation: 3,
  },
  openBadge: {
    position: 'absolute',
    left: 8, // Reduced position offset
    top: 8, // Reduced position offset
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6, // Reduced padding
    paddingVertical: 3, // Reduced padding
    borderRadius: 3, // Reduced radius
  },
  closedBadge: {
    backgroundColor: '#FF5252',
  },
  openText: {
    color: 'white',
    fontSize: 10, // Reduced font size
    fontWeight: 'bold',
  },
  closedText: {
    color: 'white',
    fontSize: 10, // Reduced font size
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 10, // Reduced padding
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 14, // Reduced font size
    fontWeight: 'bold',
    color: '#2D3436',
  },
  price: {
    color: '#FFA500',
    fontWeight: 'bold',
    fontSize: 12, // Reduced font size
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4, // Reduced margin
  },
  stars: {
    flexDirection: 'row',
    marginRight: 4, // Reduced margin
  },
  ratingText: {
    color: '#FFA500',
    fontWeight: 'bold',
    fontSize: 12, // Reduced font size
  },
  category: {
    color: '#636E72',
    fontSize: 12, // Reduced font size
    marginBottom: 4, // Reduced margin
  },
  description: {
    color: '#636E72',
    fontSize: 11, // Reduced font size
    lineHeight: 15, // Reduced line height
    marginBottom: 8, // Reduced margin
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4, // Reduced margin
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
    marginLeft: 3, // Reduced margin
    color: '#636E72',
    fontSize: 11, // Reduced font size
  },
  deliveryTime: {
    marginLeft: 3, // Reduced margin
    color: '#636E72',
    fontSize: 11, // Reduced font size
  },
});

export default SearchableItems;
