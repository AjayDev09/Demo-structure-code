import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import Wishlist from '../screens/wishlist';
import History from '../screens/history';
import {Image, Platform} from 'react-native';
import AnimatedBottomTab from '../../Animation/AnimatedBottomTab';
import Setting from '../screens/Setting';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  let Fn=(name)=>{
    if(name== 'home-outline'){
      return(
        <Image 
       source={require('../../../assets/home.png')}
       style={{
         height:20,
         width:20,
         alignItems:"center",
         tintColor:"#000"
        
       }}
       />
      )
    }else if( name =='heart-outline' ){
      return(
        <Image 
        source={require('../../../assets/heart.png')}
        style={{
          height:20,
          width:20,
          alignItems:"center",
         
        }}
        />
      )
    }
    else if(name =='history'){
      return(
        <Image 
        source={require('../../../assets/search.png')}
        style={{
          height:20,
          width:20,
          alignItems:"center",
         
        }}
        />
      )
    }
    else if(name =='setting'){
      return(
        <Image 
        source={require('../../../assets/settings.png')}
        style={{
          height:20,
          width:20,
          alignItems:"center",
         
        }}
        />
      )
    }
  }
  const drawerIcon = ({focused, size}, name) => {
    return (
     <>
        {Fn(name)}
     </>
    );
  };
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '55%',
          marginTop:50
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: options => drawerIcon(options, 'home-outline'),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerIcon: options => drawerIcon(options, 'heart-outline'),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerIcon: options => drawerIcon(options, 'history'),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: options => drawerIcon(options, 'setting'),
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: '#e2e7eb',
  active: '#000',
  inactive: '#cccccc',
  transparent: 'transparent',
};
