import React,{Component} from 'react'
import {SafeAreaView,View, Text,StyleSheet,FlatList,useState,DeviceEventEmitter} from 'react-native'



class Rank extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            score:0,
            level:0,
      }

    }



    componentDidMount(){
        this.listener = DeviceEventEmitter.addListener('changeScore', (score) => {
            // actions after receving listener
            this.setState({ score:score, });
          });
        this.listener = DeviceEventEmitter.addListener('changeLevel', (level) => {
            // actions after receving listener
            this.setState({ level:level, });
          });        
    }

    getTodayDate() {
        var date = new Date();
 
        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();
        var hour =  date.getHours().toString();
        var minute = date.getMinutes().toString();
 
        let currentDate= year+'/'+month+'/'+day+' '+hour+':'+minute;
        return currentDate;
    };

    render(){

        let currentTime=this.getTodayDate()

        return(
            <SafeAreaView>

                <View style={styles.scoreBoard}>
                    <Text style = {styles.scoreText}>
                        Your score for {currentTime}
                    </Text>

                    <Text style = {styles.levelText}>
                        level {this.state.level}
                    </Text>

                    <Text style = {styles.scoreText}>
                        is
                    </Text>

                    <Text style={styles.scoreNum}>
                        {this.state.score}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    scoreBoard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        minHeight:500,
        // backgroundColor:'red',
    },
    rankBoard:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        width:'100%',
        margin:8,
        fontFamily:'papyrus',
       
    },
    date:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        width:'50%',
        fontFamily:'papyrus',
        // color:'white',
    },
    step:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        width:'25%',
        fontFamily:'papyrus',
        // color:'white',
    },
    level:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        width:'25%',
        fontFamily:'papyrus',
        // color:'white',
    },
    scoreText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        // color:'white',
        // color:'#536895',
    },
    levelText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        //color:'#536895',
        color:'#FFB300',
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
        marginBottom:20,
        fontFamily:'papyrus',
        color:'white',
    },
});

export default Rank