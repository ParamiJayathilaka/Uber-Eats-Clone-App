import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Uber</Text>
        <Text style={styles.subtitle}>Eats</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/login.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 400,
    height: 400,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  subtitle: {
    fontSize: 24,
  },
});
