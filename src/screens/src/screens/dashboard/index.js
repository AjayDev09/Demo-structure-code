import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

import PropertyListingItem from '../../components/PropertyListingItem';
import {sampleData} from '../../utils/sampleData';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';
import AnimatedBottomTab from '../../../Animation/AnimatedBottomTab';

const Dashboard = ({navigation}) => {
  const {openDrawer} = navigation;
  return (
    <DrawerSceneWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={openDrawer}>
            <Image 
            source={require('../../menu.png')}
            style={{
              height:20,
              width:20,
              alignItems:"center",
            
            }}
            />
            </TouchableOpacity>
            <Text style={styles.searchTextPlaceHolder}>Dashboard</Text>
        
          </View>
          {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={sampleData}
            renderItem={({item}) => <PropertyListingItem {...item} />}
          /> */}
        </View>
    
      </SafeAreaView>
    </DrawerSceneWrapper>
  );
};

export default Dashboard;

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
