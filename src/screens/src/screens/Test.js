import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../../redux/saga/sagas';
import { getSecondData, getThirdData, getTodaSagaData } from '../../../redux/actions/LoginData';

const Test = () => {
    const todos = useSelector(state => state.todo.todos);
    const SECODdata = useSelector(state => state.secondData.data);
    const thirdData = useSelector(state => state.thirdData.data);
  
    console.log("SECODdata---->",SECODdata);
    console.log("todos---->",todos[0]);
    console.log("thirdData---->",thirdData);
    useEffect(()=>{
      getThirdData()
    },[])
    const renderList = () => {
      return [thirdData].map(todo => {
        return <Text key={todo.id} numberOfLines={1}>{todo.id}. {todo.title}</Text>;
      });
    };
  return (
    <View style={{
        padding:20,
        margin:10
    }}>
      <Button onPress={() => getTodaSagaData()}  title='press' style={{margin:10}} />
      <Button onPress={() => getSecondData()}  title='press2' style={{margin:10}} />
  
        {renderList()}
    </View>
  )
}

export default Test