import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import DrawerSceneWrapper from '../components/DrawerSceneWrapper'
import AnimatedBottomTab from '../../Animation/AnimatedBottomTab';

const Setting = ({navigation}) => {
    const {openDrawer} = navigation;
  return (
    <DrawerSceneWrapper>
             <View style={styles.container}>
             <View style={styles.wrapper}>
                <View style={styles.searchBar}>
                    <TouchableOpacity onPress={openDrawer}>
                    <Image 
                    source={require('../menu.png')}
                    style={{
                    height:20,
                    width:20,
                    alignItems:"center",
                    
                    }}
                    />
                    </TouchableOpacity>
                    <Text style={styles.searchTextPlaceHolder}>Setting</Text>
                </View>
                </View>
                <AnimatedBottomTab />
        </View>
    </DrawerSceneWrapper>
  )
}
const styles = StyleSheet.create({
    container: {backgroundColor: 'pink', flex: 1},
    wrapper: {padding: 16},
    searchBar: {
      backgroundColor: '#fff',
      borderRadius: 50,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      marginBottom: 12,
    },
    searchTextPlaceHolder: {
      color: '#666',
      marginLeft: 8,
    },
  });
  
export default Setting