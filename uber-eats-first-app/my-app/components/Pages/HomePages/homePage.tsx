import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';

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

      
      <Text style={styles.popularTitle}>Popular</Text>
      

      <View style={styles.popularContainer1}>
        {[{ name: 'Chicken Burger', price: 'LKR 900.00', image: 'data:image/jpeg;base64,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' },
         ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.promotionImage} source={require('@/assets/images/burgur1.png')} />
     
          </View>
        ))}
      </View>

      <View style={styles.popularContainer2}>
        
        {[ { name: 'Hawaiian pizza', price: 'LKR 1800.00', image: 'https://wallpapers.com/images/hd/hawaiian-pizza-sliced-black-background-da06fvyaflve1w9s.jpg'},
            ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.popularContainer3}>
        
        {[      { name: 'Beef Shawarma', price: 'LKR 700.00', image: 'https://png.pngtree.com/thumb_back/fw800/background/20231202/pngtree-delicious-beef-shawarma-kebab-on-a-stylish-black-textured-stone-image_13819092.png' },
         ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.popularContainer4}>
        
        {[ { name: 'Peparoni Pizza', price: 'LKR 1800.00', image: 'data:image/jpeg;base64,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' },
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

  // popularContainer:{
  //   fontSize: 14,
  //   // color: '#888',
  //   color: 'black',
  //   fontWeight: 'bold',
  // },


  popularContainer1: {
    width: Dimensions.get('window').width / 10 - 500,
    height: 90,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    margin: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'black',
    marginTop: 10,
    
    
  },

  popularContainer2: {
    width: Dimensions.get('window').width / 10 - 500,
    height: 90,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    margin: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'black',
    marginTop: 10,
    
    
  },

  popularContainer3: {
    width: Dimensions.get('window').width / 10 - 500,
    height: 90,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    margin: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'black',
    marginTop: 10,
    
    
  },

  popularContainer4: {
    width: Dimensions.get('window').width / 10 - 500,
    height: 90,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    margin: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'black',
    marginTop: 10,
    
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight:40,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  popularImage: {
    width: 80,
    height: 70,
    borderRadius: 10,
    marginTop:-10,
  },
  popularText: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom:20,
    color: 'white',
    
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: 'white',
    marginBottom:15,
  },
});
