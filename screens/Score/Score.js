import React,{Component} from 'react'
import {SafeAreaView,View, Text,StyleSheet,} from 'react-native'



class Score extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            // score:this.props.navigation.state.params('score')
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
        color:'#536895',
    },
    scoreNum:{
        
        fontSize:42,
        fontWeight:'bold',
        textAlign:'center',
        color:'#FFB300',
    },
});