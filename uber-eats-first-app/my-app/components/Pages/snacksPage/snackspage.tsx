// // import React, { useEffect, useState } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
// // import axios from 'axios';
// // import { router, useRouter } from 'expo-router';

// // export default function Sancks() {
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     getAllPizza();
// //   }, []);

// //   const getAllPizza = async () => {
// //     try {
// //       const response = await axios.get('http://192.168.8.100:8080/menu/get/Snack');
// //       setMenuItems(response.data);
// //       setLoading(false);
// //     } catch (error) {
// //       setError(error.message || 'Error fetching menu items');
// //       setLoading(false);
// //     }
// //   };

 

// //   if (error) {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Error: {error}</Text>
// //       </View>
// //     );
// //   }

// //   const detailClick = (item) => {
// //     router.push({
// //       pathname: 'details',
// //       params: {
// //         itemImage: item.image,
// //         itemCategory: item.category,
// //         itemName: item.itemName,
// //         price: item.price,
// //         description: item.description
// //       }
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.menuStyle}>Our Menu</Text>
     
// //       <FlatList
// //         style={styles.list}
// //         data={menuItems}
// //         keyExtractor={(item) => item._id}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity style={styles.itemContainer} onPress={() => detailClick(item)}>
// //             <Image source={{ uri: item.image }} style={styles.image} />
// //             <View style={styles.textContainer}>
              
// //               <Text style={styles.name}>{item.itemName}</Text>
// //               <Text style={styles.price}>LKR {item.price}.00</Text>
// //             </View>
// //           </TouchableOpacity>
// //         )}
// //         numColumns={2}
// //         contentContainerStyle={styles.flatListContainer}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //   },
// //   list: {
// //     marginTop: 20,
// //   },
// //   menuStyle: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginTop: 40,
// //     alignItems: 'center',
// //   },
// //   menuList: {
// //     marginTop: 50,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   menuItem: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginHorizontal: 30,
// //     color: 'black',
// //   },
// //   selectedMenuItem: {
// //     color: '#FFA500',
// //   },
// //   itemContainer: {
// //     width: Dimensions.get('window').width / 2 - 20,
// //     height: 250,
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     margin: 10,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.8,
// //     shadowRadius: 3,
// //     elevation: 5,
// //     backgroundColor: '#fff',
// //   },
// //   image: {
// //     width: 120,
// //     height: 120,
// //     borderRadius: 60,
// //     marginBottom: 10,
// //   },
// //   textContainer: {
// //     alignItems: 'center',
// //   },
// //   category: {
// //     fontSize: 16,
// //     color: 'gray',
// //   },
// //   name: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   price: {
// //     marginTop: 10,
// //     fontSize: 17,
// //     color: 'gray',
// //     textAlign: 'center',
// //   },
// //   flatListContainer: {
// //     alignItems: 'center',
// //   },
// // });

// // export default Sancks;

// /////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import { Card, Button } from 'react-native-elements';

// const beverages = [
//   {
//     name: 'Pineapple Juice',
//     price: 'LKR 600.00',
//     image: require('./path-to-pineapple-image.jpg'), // Replace with your image path
//   },
//   {
//     name: 'Watermelon Juice',
//     price: 'LKR 400.00',
//     image: require('./path-to-watermelon-image.jpg'), // Replace with your image path
//   },
//   {
//     name: 'Papaya Juice',
//     price: 'LKR 400.00',
//     image: require('./path-to-papaya-image.jpg'), // Replace with your image path
//   },
//   {
//     name: 'Apple Juice',
//     price: 'LKR 600.00',
//     image: require('./path-to-apple-image.jpg'), // Replace with your image path
//   },
// ];

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.headerText}>Our Menu</Text>
//       <View style={styles.menuCategories}>
//         <Text style={styles.categoryText}>Meals</Text>
//         <Text style={styles.categoryText}>Beverages</Text>
//         <Text style={styles.categoryText}>Snacks</Text>
//       </View>
//       <View style={styles.cardContainer}>
//         {beverages.map((beverage, index) => (
//           <Card key={index} containerStyle={styles.card}>
//             <Image source={beverage.image} style={styles.image} />
//             <Text style={styles.title}>{beverage.name}</Text>
//             <Text style={styles.price}>{beverage.price}</Text>
//           </Card>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   menuCategories: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 10,
//   },
//   categoryText: {
//     fontSize: 18,
//     color: '#f0a500',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   card: {
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     width: '40%',
//   },
//   image: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   price: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 5,
//   },
// });
