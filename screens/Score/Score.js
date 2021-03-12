import React,{Component} from 'react'
import {SafeAreaView,View, Text,StyleSheet,FlatList} from 'react-native'
import BookPost from '../../components/books/booklist';
import BookDatas from '../../components/books/booksource';



const scoreRes =[
    {
        Date:'03/11/2021',
        Steps:'31',
        level:2
    },
    {
        Date:'03/10/2021',
        Steps:'50',
        level:2,
    },
    {
        Date:'03/03/2021',
        Steps:'61',
        level:2,
    },
    {
        Date:'03/01/2021',
        Steps:'65',
        level:2,
    },
]
 


class Score extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            // score:this.props.navigation.state.params('score')
            scoreBase:[

            ]
        }

    }

    
    render(){
        
        console.log(this.props.route.params)
        return (
            <SafeAreaView style = {styles.container}>
                <View style={styles.scoreBoard}>
                    <Text style = {styles.scoreText}>
                        Your score is  
                    </Text>

                    <Text style={styles.scoreNum}>
                        65
                        {this.props.route.params}
                    </Text>
                </View>

                <View style={styles.leaderBoard}>
                    <Text style={styles.leaderTitle}>Ranking</Text>
                    <FlatList
                        data={scoreRes}
                        renderItem={({item}) => <Text>{item.key}</Text>}
/>
                </View>
            </SafeAreaView>
        )
    }
}

export default Score

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scoreBoard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    scoreText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        // color:'#536895',
    },
    scoreNum:{
        
        fontSize:42,
        fontWeight:'bold',
        textAlign:'center',
        // color:'#FFB300',
        color:'green',
    },
    leaderBoard:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        // color:'#536895',
    },
    leaderTitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        // color:'#536895',
    },
});