import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native';

export default function Index() {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={styles.backgroundView}>
    
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter Your Mobile Number</Text>
      </View>
      <View style={styles.inputContainer1}>
        <TextInput
          style={styles.input1}
          onChangeText={setTextValue}
          value={textValue}
          placeholder=""
        />
      </View>

      <View style={styles.inputContainer2}>
        <TextInput
          style={styles.input2}
          onChangeText={setTextValue}
          value={textValue}
          placeholder="+94 Mobile Number"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
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
    backgroundColor: 'black',
  },

  textContainer: {
    position: 'absolute',
    top: '5%',
    left:'5%',
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },


  inputContainer1: {
    position: 'absolute',
    top: '10%',
    width: '30%',
    left: '0%',
    paddingHorizontal: 20,
  }, 
  input1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:10,
  },


  inputContainer2: {
    position: 'absolute',
    top: '10%',
    width: '70%',
    left: '20%',
    paddingHorizontal: 20,
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 300,
  },
});
