import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { getDataForAsync } from '../../CommanFunctions/CommanFunction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponents from '../../components/HeaderComponents';
import CustomInput from '../../components/CustomInput';
import { useState } from 'react';
import UserInsta from './UserInsta';
import { COLORS } from '../../theme/color';
import { Count, Decrement, set_data } from '../../redux/actions/LoginData';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const Data = useSelector(state => {
    return state.CounterReducer?.count;
  });
  const Datas = useSelector(state => {
    return state.GetData;
  });
  let count= 5
  const [data, setData] = useState({
    mail: 0,
    password: '',
  });
  
  const handler = (v, i) => {
    setData(e => ({ ...e, [i]: v }));
  };

    const handleDispatch = () => {
      Count()
    };
    const Decress = () => {
      Decrement()
    };
    console.log('data---0000----2--',Data,Datas);
  return (
    <View style={{
      backgroundColor:COLORS.secondary,
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      {/* <UserInsta navigation={navigation} />  */}
      <Button onPress={handleDispatch} title='Count'/>


      <Button onPress={Decress} title='Decress'/>
      
      <Text>{Data}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  BottomViewContainer: {

    height: 50,
    backgroundColor: COLORS.primary,
  },
  ViewMain: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal: 30
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
})

export default Home