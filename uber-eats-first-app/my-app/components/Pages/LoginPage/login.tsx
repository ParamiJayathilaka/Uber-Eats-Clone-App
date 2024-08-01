import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Login({ navigation }: { navigation: any }) {
  return (
    <View style={styles.backgroundView}>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/login1.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Uber Eats</Text>
      </View>
      <Text style={styles.title1}>
        Get Started With Uber Eats
      </Text>
    
      <Pressable style={styles.buttonContainer} 
        onPress={() => {
            navigation.navigate("Signup-Page");
          }}
      >
        <Text style={styles.title3}>Continue</Text>
      </Pressable>
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
    height: 50,
    backgroundColor: '#02520b',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    width: 300,
  },
  title3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
