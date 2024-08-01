import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import login from '@/components/Pages/LoginPage/login';
import Signup from '@/components/Pages/SignUpPage/signup';
import HomeScreen from '@/components/Pages/HomePages/homePage';
import Entrance from '@/components/Pages/EntrancePages/enterpage';
import ConformLog from '@/components/Pages/ConformLoginPage/confirmLogin';


const stack = createNativeStackNavigator()


export default function index() {
  return (
    <NavigationContainer independent={true}>
    <stack.Navigator initialRouteName="Home-Page">
      <stack.Screen name='login-page' component={login}   options={{
            headerShown: false,
          }}/>
      <stack.Screen name='Signup-Page' component={Signup} options={{
            headerShown: false,
      }}/>
       <stack.Screen name='Home-Page' component={HomeScreen} options={{
            headerShown: false,
      }}/>
      <stack.Screen name='Entrance-Pages' component={Entrance} options={{
            headerShown: false,
      }}/>
     <stack.Screen name='ConfirmLog-Page' component={ConformLog} options={{
            headerShown: false,
      }}/>
      {/* <stack.Screen name='Bavarage-Page' component={Bavarage} options={{

      }} */}
   
     
      
    </stack.Navigator>

    
   </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

})