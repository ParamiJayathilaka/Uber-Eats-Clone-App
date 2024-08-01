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

 

      <TextInput style={styles.searchInput} placeholder="Search" />

      <ScrollView horizontal style={styles.categoryContainer}>
        {[ 'Traditional', 'japanese', 'Indian','chinese'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <Text style={styles.popularTitle}>Popular Meals</Text>
      

      <View style={styles.popularContainer1}>
        {[{ name: 'Chicken Fried Rice', price: 'LKR 1300.00', image: 'https://img.freepik.com/premium-photo/fried-rice-bowl-dark-background_666745-575.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Sea Food Fried Rice', price: 'LKR 1800.00', image: 'https://static.vecteezy.com/system/resources/previews/026/772/554/non_2x/fried-rice-with-ai-generated-free-png.png',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[      { name: 'Chicken Biriyani', price: 'LKR 2100.00', image: 'https://img.freepik.com/premium-photo/juicy-chicken-biryani-with-smoke_303085-7807.jpg',image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png' },
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
        
        {[ { name: 'Butter Nan', price: 'LKR 200.00', image: 'https://img.freepik.com/premium-photo/indian-naan-bread-with-parsley-wooden-plate-black-background_934652-1026.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Chicken  Pasta', price: 'LKR 2200.00', image: 'https://www.shutterstock.com/image-photo/ground-chicken-pasta-bake-onion-600nw-2318647101.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Prawn With Pasta', price: 'LKR 2800.00', image: 'https://static.vecteezy.com/system/resources/previews/028/544/967/large_2x/a-plate-of-seafood-with-pasta-on-black-background-free-photo.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Chicken  Noodles', price: 'LKR 2000.00', image: 'https://www.shutterstock.com/image-photo/stir-fry-noodles-vegetables-beef-600nw-1673079958.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Tempura', price: 'LKR 1500.00', image: 'https://png.pngtree.com/background/20230425/original/pngtree-japanese-food-in-a-bowl-on-black-background-picture-image_2478920.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Sushi', price: 'LKR 1800.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplVfRWaRt_GfrUG9f9xk5AC-YkPJWQwOz5kVpe3a36yQKkAUo4E2NLb9J2m7bYepTPuI&usqp=CAU' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
        
        {[ { name: 'Spicy Ramen', price: 'LKR 9500.00', image: 'https://img.freepik.com/premium-photo/spicy-ramen-black-bowl-decorate-with-boiled-eggs-ghost-skull-with-halloween_980220-403.jpg' ,image1:'https://cdn-icons-png.flaticon.com/128/4315/4315609.png'},
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
