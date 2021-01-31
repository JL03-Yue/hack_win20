/*
    INSTRUCTIONS:
    4. Create a new file called twitter.js in the same directory as App.js and paste the 
       contents of this file into it.
*/

import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Feather, Entypo,  } from '@expo/vector-icons'; 

function BookPost (props) {
    return(
        <View style={styles.container}>
        
        
        <View style={styles.postContainer}>
            {/*Book Image */}
            <Image 
            style={styles.postImage}
            source={{
                uri: props.bookPic
            }}
            />

            <View style={styles.title}>
                <Text style={styles.bookName}>{props.bookName}</Text>
                <Text>{props.className}</Text>
                <Text>{props.authorName}</Text>
                <Text>{props.professorName}</Text>
            </View>

            <Text>
                {props.bookContent}
            </Text>
            
            <View style={styles.icons}>
                <Feather name="message-circle" size={24} color="black" />
                <Entypo name="retweet" size={24} color="black" />
                <Feather name="heart" size={24} color="black" />
                <Feather name="share" size={24} color="black" />
            </View>
            
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderWidth: 0.5,
      width: '100%',
      padding: 10
    },
    profileContainer: {
        padding: 6,
        width: '20%'
    },
    postContainer: {
        width: '80%',
        paddingHorizontal: 10,
    },
    bookName: {
        fontSize: 20,
        marginRight: 10,
        fontWeight: 'bold'
    },
    handleName: {
        color: 'grey'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePic: {
        width: 60, 
        height: 60,
        borderRadius: 30,
    },
    postImage: {
        width: '100%',
        height: 150,
        marginVertical: 10,
        borderRadius: 10
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });

export default BookPost