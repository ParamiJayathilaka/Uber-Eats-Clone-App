import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';

export default function BaveragesPage() {
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

 

      <TextInput style={styles.searchInput} placeholder="Search" />

      <ScrollView horizontal style={styles.categoryContainer}>
        {[ 'Smoothie', 'Mocktail', 'MilkShake','Coffee'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <Text style={styles.popularTitle}>Popular Beverage</Text>
      

      <View style={styles.popularContainer1}>
        {[{ name: 'Vanila MilkShake', price: 'LKR 1300.00', image: 'https://media.istockphoto.com/id/477470798/photo/ice-cream-milkshake-with-cookie-and-crumbs.jpg?s=612x612&w=0&k=20&c=lIXytK6VEhW6ObuwXrrftrcK3UHTWGesxkSa087E7Yc=' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Chocolate MilkShake', price: 'LKR 1300.00', image: 'https://static.vecteezy.com/system/resources/previews/029/639/510/large_2x/delicious-chocolate-milkshake-in-a-glass-on-black-background-generative-ai-photo.jpg',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[      { name: 'Berry Smoothie ', price: 'LKR 1200.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FJwGJ8x1_HwJcA0X12CM-MQKaZZ8FkKKmw&s',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Avacado Milkshake', price: 'LKR 1300.00', image: 'https://img.freepik.com/premium-photo/composition-avocado-smoothie-cup-fruits-scattered-table-dark-background-generative-ai_63135-5347.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer5}>
        
        {[ { name: 'Blue Berry Mocktail', price: 'LKR 1400.00', image: 'https://lonumedhu.com/sites/default/files/blueberry-cover_0.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer6}>
        
        {[ { name: 'Lemon Mocktail', price: 'LKR 1300.00', image: 'https://www.shutterstock.com/image-photo/cocktail-gintonic-lemon-slices-twigs-600nw-2090018071.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer7}>
        
        {[ { name: 'Hot Chocolate', price: 'LKR 800.00', image: 'https://as2.ftcdn.net/v2/jpg/04/73/67/31/1000_F_473673185_U9MH4cvZxENEpzbKm9fbskgRZ4vK08iz.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer8}>
        
        {[ { name: 'Orange Mojito', price: 'LKR 1200.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9jpM1ZwphfAuwvIuzoF62S-LMngZYdKDEw&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer9}>
        
        {[ { name: 'Strawberry Mojito', price: 'LKR 1300.00', image: 'https://c8.alamy.com/comp/2G65J8K/strawberry-mojito-with-lemon-and-mint-isolated-on-black-background-with-reflection-2G65J8K.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
            <Image style={styles.popularImage1} source={{ uri: item.image1 }} />
          </View>
        ))}
      </View>

      <View style={styles.popularContainer10}>
        
        {[ { name: 'Boba Drinks', price: 'LKR 950.00', image: 'https://img.freepik.com/premium-photo/milk-tea-with-bubble-tapioca-pearls-black-background_468322-1535.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
    padding: 15,
    
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
 

  popularContainer1: {

    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    
    
  },

  popularContainer2: {
    
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    marginLeft:'auto',
    marginTop:-210,
    
    
  },

  popularContainer3: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    
    
  },

  popularContainer4: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    marginLeft:'auto',
    marginTop:-210,
    
  },

  popularContainer5: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    
    
  },

  popularContainer6: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    marginLeft:'auto',
    marginTop:-210,
    
  },

  popularContainer7: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    
    
  },

  popularContainer8: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    marginLeft:'auto',
    marginTop:-210,
    
  },

  popularContainer9: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    
    
  },

  popularContainer10: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    height: 200,
   
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: 'black',
    marginLeft:'auto',
    marginTop:-210,
    
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight:40,
  },
  popularItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop:10,
  },
  popularImage1: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop:-40,
    
    marginStart:120,
  },
  popularText: {
    fontSize: 16,
    marginLeft: -30,
    marginBottom:30,
    marginTop:15,
    color: 'white',
    fontWeight: 'bold',
    
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: -30,
    color: 'white',
    marginBottom:10,
    marginTop:-20,
  },
});
