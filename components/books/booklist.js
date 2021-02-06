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
        
        
        <View style={styles.imageContainer}>
            {/*Book Image */}
            <Image 
            style={styles.postImage}
            source={{
                uri: props.bookPic
            }}
            />
        </View>

        <View style={styles.contentContainer}>

            <View style={styles.textBook}>
                <Text style={styles.bookName}>{props.bookName}</Text>
                
                
            </View>

            <View>
                <Text style={styles.authorName}>{props.authorName}</Text>
            </View>
            
            <View style={styles.class}>
                <Text>{props.className}</Text>
                <Text>Professor {props.professorName}</Text>
            </View>

            {/*
            <Text>
                {props.bookContent}
            </Text>
            */}
            {/*
            <View style={styles.icons}>
                <Feather name="message-circle" size={24} color="black" />
                <Entypo name="retweet" size={24} color="black" />
                <Feather name="heart" size={24} color="black" />
                <Feather name="share" size={24} color="black" />
            </View>
            */}

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderWidth: 0.1,
      padding: 10
    },
    imageContainer: {
        padding: 0,
        width: '35%',
    },
    postImage: {
        height:150,
        display:'flex',
        marginVertical: 5,
        borderRadius: 10,
        borderWidth:1
    },
    contentContainer: {
        width: '65%',
        paddingHorizontal: 10,
    },
    bookName: {
        fontSize: 15,
        marginBottom:5,
        fontWeight: 'bold'
    },
    authorName: {
        marginBottom:10,
        fontSize:13
    },
    textBook: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize:13
    },    
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });

export default BookPost