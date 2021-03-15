import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import BoardScreen from './screens/Board/Board'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScoreScreen from './screens/rank/Rank'
import { NavigationContainer } from '@react-navigation/native';
import RankScreen from './screens/login/login'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Board">
        <Tab.Screen name="Board" component={BoardScreen} />
        <Tab.Screen name="Rank" component={ScoreScreen} />
        <Tab.Screen name="Log In" component={RankScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    )

  }

}

export default App
