import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Homepage from './screens/home/homepage'
import Landing from './screens/Landing/Landing'



class App extends Component{
  render(){
    return(
     <Landing/>
    )

  }

}

export default App
