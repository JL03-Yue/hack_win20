import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import TwitterPost from './components/books/booklist';
import BookDatas from './components/books/booksource';
import Homepage from './screens/home/homepage'


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