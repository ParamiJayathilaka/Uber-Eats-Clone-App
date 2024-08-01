import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';

export default function SnacksPage() {
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
        {[ 'Sweet', 'Spicy', 'More Spicy'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <Text style={styles.popularTitle}>Popular Snacks</Text>
      

      <View style={styles.popularContainer1}>
        {[{ name: 'Rools', price: 'LKR 100.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv347Q7BmABWqenKo-YyA2kLfb6qkbR3HtA&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Patis', price: 'LKR 50.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH7qVsC88lmltTKssnAOMFkM_tMSqb4tdAw&s',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[      { name: 'Parippu Vada', price: 'LKR 70.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7Mqk41XtLw_WQQGIiPQwmI_djWmsBPE2vQ&s',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Udu Vada', price: 'LKR 1800.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_hhAcJ3KWkVmrLxDSymSa-o9iXRPwctoZQ&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Samosa', price: 'LKR 1800.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEDoOl6ZKEt8gFKPrXOb2Hw6wMfja-ruLdg&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Potato Chips', price: 'LKR 1800.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzJqV6SPI7e2Th5mNeGywj_M5L6kqffabPw&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Pani Walalu', price: 'LKR 1800.00', image: 'https://foodvoyageur.com/wp-content/uploads/2021/04/Pani-walalu12-1024x683-1.webp' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Vatalappan', price: 'LKR 400.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoawGpu52K7dAoY3jmBrQ82sf4ZYJWw46yA&s' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
