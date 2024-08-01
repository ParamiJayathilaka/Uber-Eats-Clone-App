import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput ,Image,TouchableOpacity} from 'react-native';

export default function Signup() {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={styles.backgroundView}>
    
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter Your Mobile Number</Text>
      </View>
      

      <TouchableOpacity style={[styles.button, styles.countryBtn]}>
        <Image
          style={styles.countryLogo}
          source={require('@/assets/images/srilanka.png')}
        />
      </TouchableOpacity>


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

      <View style={styles.textContainer2}>
        <Text style={styles.title}>-----------------------------or -----------------------------</Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.googleBtn]}>
        <Image
          style={styles.googleLogo}
          source={require('@/assets/images/google.png')}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.appleBtn]}>
        <Image
          style={styles.appleLogo}
          source={require('@/assets/images/apple.png')}
        />
        <Text style={styles.appleText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.mailBtn]}>
        <Image
          style={styles.mailLogo}
          source={require('@/assets/images/mail.png')}
        />
        <Text style={styles.mailText}>Continue with Mail</Text>
      </TouchableOpacity>

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
 
  countryBtn: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius:10,
    position: 'absolute',
    top: '8.5%',
    width: '20%',
    left: '5%',
    
  },
  countryLogo:{
    width: 30,
    height: 30,
    left:0,
    bottom:5,
    
  },
  inputContainer2: {
    position: 'absolute',
    top: '10%',
    width: '70%',
    left: '28%',
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
    top: 110,
    alignSelf: 'center',
    width: 300,
  },

  textContainer2:{
    position: 'absolute',
    top: '35%',
    left:'0%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    top:40,
    marginTop: 8,
  },
  googleBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleLogo: {
    width: 20,
    height: 20,
    right:30,
  },

  appleBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  appleLogo: {
    width: 20,
    height: 20,
    right:30,
  },

  mailBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mailLogo: {
    width: 20,
    height: 20,
    right:30,
  },
});
