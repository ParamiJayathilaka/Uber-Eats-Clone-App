import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

export default function Entrance() {
  return (
    <View style={styles.backgroundView}>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/enter.png')}
      />
    
    <View style={styles.buttonContainer1}>
        <Button
          title="Go"
          color="#010d00"
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
  
  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    width: 300,
 
  },

  buttonContainer1: {
    position: 'absolute',
    top: 450,
    alignSelf:'flex-end',
    width: 50,
    right:15,
   
  },
});

