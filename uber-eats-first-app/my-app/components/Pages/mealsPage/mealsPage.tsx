import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';

export default function MealsPage() {
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
            <Text style={styles.promotionText}>Buy One And Get One Free</Text>
            <Text style={styles.promotionSubText}>On All Orders above LKR 2000.00</Text>
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
        {[{ name: 'Chicken Burger', price: 'LKR 900.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBF8dCnJ_NYrXCKgDab1o8pCx308xfSWWu5w&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
         ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
           
     
          </View>
        ))}
      </View>

      <View style={styles.popularContainer2}>
        
        {[ { name: 'Hawaiian pizza', price: 'LKR 1800.00', image: 'https://wallpapers.com/images/hd/hawaiian-pizza-sliced-black-background-da06fvyaflve1w9s.jpg',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
            ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer3}>
        
        {[      { name: 'Beef Shawarma', price: 'LKR 700.00', image: 'https://png.pngtree.com/thumb_back/fw800/background/20231202/pngtree-delicious-beef-shawarma-kebab-on-a-stylish-black-textured-stone-image_13819092.png',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
         ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer4}>
        
        {[ { name: 'Peparoni Pizza', price: 'LKR 1800.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFDi7ucB6js3v-TlnTZe69ZBrG28waBfkGA&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
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
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#10fc08',
    borderWidth: 1,
    shadowColor: '#10fc08',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
   
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
    color: 'white',
  },
  promotionSubText: {
    fontSize: 14,
    // color: '#888',
    color: 'white',
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
  popularImage1: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop:40,
  },
  popularText: {
    fontSize: 16,
    marginLeft: 10,
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
