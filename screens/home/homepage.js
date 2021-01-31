import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import BookPost from '../../components/books/booklist';
import BookDatas from '../../components/books/booksource';


export default ()=>{
  
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={BookDatas}
        renderItem={(obj) => {
          console.log(obj.item);
          return(
            <BookPost 
              bookName={obj.item.bookName}
              bookEdition={obj.item.bookName}
              className={obj.item.className}
              bookPic={obj.item.bookPic}
              bookContent={obj.item.bookContent}
              authorName={obj.item.authorName}
              professorName={obj.item.professorName}
              optional={obj.item.optional}
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <StatusBar style="auto"/ >
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