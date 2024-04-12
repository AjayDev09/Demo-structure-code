import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import CustomSwitch from './src/screens/Animation/CustomSwitch';

import * as Progress from 'react-native-progress';
import AnimatedButton from './src/screens/Animation/AnimatedButton';
import { useState } from 'react';


import DrawerNavigator from './src/screens/src/navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AnimatedBottomTab from './src/screens/Animation/AnimatedBottomTab';


const App = () => {
  const [active, setActive] = useState(0);

  return (
    <>
    
    <NavigationContainer>
      <DrawerNavigator />
      {/* <AnimatedBottomTab /> */}
    </NavigationContainer>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // padding:19,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20
  },
  ripple: {
    width: 200,
    height: 40,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});
export default App
