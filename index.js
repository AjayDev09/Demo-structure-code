/**
 * @format
 */
import {AppRegistry, StatusBar} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { useEffect } from 'react';
import { useState } from 'react';
import AuthApp from './AuthApp';
import { getDataForAsync } from './src/CommanFunctions/CommanFunction';
import messaging from '@react-native-firebase/messaging';
const index = () => {
  
}

AppRegistry.registerRunnable(appName, async initialProps => {
 
      
        let loginStatus = await getDataForAsync('Login');
            console.log('loginstatus----',loginStatus);
        
        // loginStatus == true ?
        //     AppRegistry.registerComponent(appName, () => App)
        //     :
        //     AppRegistry.registerComponent(appName, () => AuthApp)
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });
        AppRegistry.registerComponent(appName, () => App)

        AppRegistry.runApplication(appName, initialProps);
    
});

export default index;


