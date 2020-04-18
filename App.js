/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation'
import * as Nav from './RootNavigation'
import About from './pages/About'
import Main from './pages/Main'
const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} 
        options={{headerRight: () => (
          <TouchableOpacity onPress={()=>Nav.navigate('About')}>
            <Text style={styles.outer}>About</Text>
          </TouchableOpacity>)}}
      />
      <Stack.Screen name="About" component={About} />
      
    </Stack.Navigator>
    
    </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  outer:{ 
    padding: 5,
    backgroundColor: '#DDDDDD',
    marginRight: 5
  }
})
export default App;
