import { StatusBar } from 'expo-status-bar';
/*
import {createAppContainer} from 'react-navigation'

import {BottomNavigator} from './components/navigation/navigation'
*/

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Homepage from './screens/home/homepage'
import Searchpage from './screens/search/searchpage'
import Minepage from './screens/mine/minepage'
import Marketpage from './screens/market/marketpage'
import {createStackNavigator} from 'react-navigation-stack'

function WildernessExplorer(){
  return(
    <View>
      <Text>WildernessExplorer</Text>
      <Button
        title="Go to profile screen"
      />

    </View>
    
  );
}

export default function App()
{
  return(
    <SafeAreaView style={styles.container}>

      {/*Home Page */}
      <Homepage/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});