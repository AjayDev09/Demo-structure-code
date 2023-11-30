import {View, Text, TextInput, Platform, Button} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {
  getDataForAsync,
  setDataInAsync,
} from '../../CommanFunctions/CommanFunction';
import {useState} from 'react';

import CustomInput from '../../components/CustomInput';
import Toast from 'react-native-simple-toast';
const SignIn = ({navigation}) => {

  const [data, setData] = useState({
    mail: '',
    password: '',
  });
  const handler = (v, i) => {
    setData(e => ({...e, [i]: v}));
  };


  return (
    <View
      style={{
        padding: 20,
      }}>
      <CustomInput
        Placeholder={'Enter mail'}
        Value={data?.mail}
        attrName={'mail'}
        updateMasterState={handler}
      />
      <CustomInput
        Placeholder={'Enter password'}
        Value={data?.password}
        attrName={'password'}
        updateMasterState={handler}

      />
      <View
        style={{
          marginTop: 20,
        }}>
        <Button
          onPress={() => {
                (() => {
            setDataInAsync('Login', true);
          })();
            navigation.replace('DrawbleStack');
            Toast.show('Logging successfully.', Toast.SHORT);

          }}
          title="Sign In"
        />
      </View>
    </View>
  );
};

export default SignIn;
