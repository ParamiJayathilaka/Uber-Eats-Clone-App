import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

export default function Index() {
  return (
    <View style={styles.backgroundView}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/login1.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Uber Eats</Text>
      </View>
      <Text style={styles.title1}>
        Get Started With Uber Eats
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue "
          color="#02520b"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    top: '5%', 
    alignItems: 'center',
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: 'black', 
  },
  title1: {
    textAlign: 'center',
    marginVertical: 8,
    position: 'absolute',
    top: '80%', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    width: 300,
    
  },
});

