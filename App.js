import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Homepage from './screens/home/homepage'
import Board from './screens/Landing/Board'



class App extends Component{
  render(){
    return(
     <Board/>
    )

  }

}

export default App
