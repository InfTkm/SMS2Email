/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './pages/About'
import Main from './pages/Main'
import SmsAndroid from 'react-native-get-sms-android'
const Stack = createStackNavigator();

const App = () => {
  
  SmsAndroid.list(
    '', ()=>{},
    (c, l)=> {
      console.log(l)
    }
  )
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="About" component={About} />
      
    </Stack.Navigator>
    
    </NavigationContainer>
  )
  
}

export default App;
