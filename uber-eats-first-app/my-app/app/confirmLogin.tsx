import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput ,Image,TouchableOpacity} from 'react-native';

export default function Index() {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={styles.backgroundView}>
    
      <View style={styles.textContainer}>
        <Text style={styles.title}>Confirm Your Information</Text>
      </View>

      <View style={styles.inputContainer1}>
        <TextInput
          style={styles.input1}
          onChangeText={setTextValue}
          value={textValue}
          placeholder="FirstName"
        />
      </View>

      <View style={styles.inputContainer2}>
        <TextInput
          style={styles.input2}
          onChangeText={setTextValue}
          value={textValue}
          placeholder="LastName"
        />
      </View>
      

      <TouchableOpacity style={[styles.button, styles.countryBtn]}>
        <Image
          style={styles.countryLogo}
          source={require('../assets/images/srilanka.png')}
        />
      </TouchableOpacity>


      <View style={styles.inputContainer3}>
        <TextInput
          style={styles.input3}
          onChangeText={setTextValue}
          value={textValue}
          placeholder="+94 Mobile Number"
        />
      </View>
      <View style={styles.buttonContainer1}>
        <Button
          title="Next"
          color="#02520b"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

      <View style={styles.buttonContainer2}>
        <Button
          title="Back"
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    top:20,
    marginTop: 8,
  },
 
  countryBtn: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:10,
    position: 'absolute',
    top: '25%',
    width: '20%',
    left: '6%',
    
  },
  countryLogo:{
    width: 30,
    height: 30,
    left:0,
    bottom:5,
    
  },
  inputContainer1: {
    position: 'absolute',
    top: '15%',
    width: '50%',
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
    top: '15%',
    width: '50%',
    left: '45%',
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
  inputContainer3: {
    position: 'absolute',
    top: '27%',
    width: '70%',
    left: '28%',
    paddingHorizontal: 20,
  },
  input3: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:10,
  },
  buttonContainer1: {
    position: 'absolute',
    top: 200,
    alignSelf:'flex-end',
    width: 100,
    right:15,
  },

  buttonContainer2: {
    position: 'absolute',
    top: 200,
    alignSelf:'flex-end',
    width: 100,
    left:15,
  },


});
