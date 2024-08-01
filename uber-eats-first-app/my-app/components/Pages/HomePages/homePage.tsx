import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

export default function HomePage() {
  const [textValue, setTextValue] = useState('');

  return (
  
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.teast}>Uber</Text>
          <Text style={styles.hub}>Eats</Text>
        </View>
       
        {/* <Image style={styles.profileImage} source={require('@/assets/images/boy.png')}  />
     */}
      </View>

      
      <View style={styles.promotionContainer}>
        <Text style={styles.promotionTitle}>Promotions</Text>
        <View style={styles.promotionItem}>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Today's offer</Text>
            <Text style={styles.promotionText}>Free Box of Fries</Text>
            <Text style={styles.promotionSubText}>On All Orders above LKR 2500.00</Text>
          </View>
          <Image style={styles.promotionImage} source={require('@/assets/images/burgur1.png')} />
        </View>
      </View>

      <TextInput style={styles.searchInput} placeholder="Search" />

      <ScrollView horizontal style={styles.categoryContainer}>
        {['All', 'Burger', 'Pizza', 'Shawarma','Dessert'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular</Text>
        {[{ name: 'Beef Burger', price: 'LKR 800.00', image: 'https://media.istockphoto.com/id/1397632887/photo/beef-burger-sandwich-with-salad-lettuce-tomato-cheese-and-dressing.jpg?s=612x612&w=0&k=20&c=kC2e64DxrQe_yhHxMhXs0JimtAMvvXo4ZpgbKXAwDUo=' },
         { name: 'Cheese Pizza', price: 'LKR 1800.00', image: 'https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?ga=GA1.1.1360257794.1717265664&semt=sph' },
        { name: 'Pork Burger', price: 'LKR 600.00', image: 'https://img.freepik.com/premium-photo/juicy-beef-burger-black-background_109285-6287.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    
    paddingVertical: 5,
    paddingHorizontal: 10,
    
  },
  teast: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', // White color for "Teast"
    backgroundColor:'green',
  },
  hub: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'green', // Orange background for "Hub"
    color: 'white', // Black color for "Hub"
    
    paddingHorizontal: 8,
  },
  profileImage: {
    width: 70,
    height: 100,
   
    
  },
  searchInput: {
    backgroundColor: '#a9ada8',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    fontSize:15,
    fontWeight:'bold'
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 20,
    
  },
  categoryItem: {
    marginLeft: 13,
    padding: 10,
    backgroundColor: '#0f4701',
    borderRadius: 10,
    
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    
  },
  promotionContainer: {
    padding: 20,
  },
  promotionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1cfc08',
  },
  promotionItem: {
    backgroundColor: '#a9ada8',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionImage: {
    width: 120,
    height: 90,
    marginLeft: 10,
  },
  promotionTextContainer: {
    flex: 1,
  },
  promotionText: {
    fontSize: 16,
    color: 'black',
  },
  promotionSubText: {
    fontSize: 14,
    // color: '#888',
    color: 'black',
    fontWeight: 'bold',

  },
  popularContainer: {
    padding: 20,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: 'white',
  },
});
