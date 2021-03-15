import React,{Component} from 'react'
import {SafeAreaView,View, Text,StyleSheet,FlatList,useState,DeviceEventEmitter} from 'react-native'
import BookPost from '../../components/books/booklist';
import BookDatas from '../../components/books/booksource';



class Score extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            score:0,
            level:0,


            scoreBase:[
                {
                    Date:'03/11/2021 11:15',
                    Steps:'31',
                    level:1,
                    
                },
                {
                    Date:'03/11/2021 11:15',
                    Steps:'37',
                    level:1,
                    
                },
                {
                    Date:'03/11/2021 11:15',
                    Steps:'39',
                    level:1,
                    
                },
                {
                    Date:'03/10/2021 9:45',
                    Steps:'50',
                    level:3,
                },
                {
                    Date:'03/03/2021 20:08',
                    Steps:'61',
                    level:2,
                },
                {
                    Date:'03/01/2021 01:03',
                    Steps:'65',
                    level:2,
                },
            ]

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
          
          let currentTime=this.getTodayDate();
          this.pushNewScore(currentTime)
          
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

    renderItemView=(data)=>{
        return(
            <Text>{data.item.Date}</Text>
        )
    }

    pushNewScore(currentTime){

        let tempScoreBase = [...this.state.scoreBase]
        // let currentTime=this.getTodayDate()
        tempScoreBase.push({
            Date:currentTime, 
            Steps: this.state.score,
            level:this.state.level
        });

        console.log('enter push2')
        this.setState({
            scoreBase:tempScoreBase,
        })
    }

    render(){
        
       
        return (
            <SafeAreaView style = {styles.container}>
               

                <View style={styles.leaderBoard}>
                    <Text style={styles.leaderTitle}>Ranking</Text>
                    <FlatList
                        data={this.state.scoreBase}
                        renderItem={({item}) => 
                    <View style={styles.rankBoard}>
                        <Text style={styles.date}>{item.Date}</Text>
                        <Text style={styles.step}>{item.Steps}</Text>
                        <Text style={styles.level}>{item.level}</Text>
                    </View>
                
                    }                
                        ketExtracter={item=>item.Date.toString()}
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
      backgroundColor:'black'
    },
    scoreBoard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        minHeight:500,
        backgroundColor:'red',
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
        color:'white',
    },
    step:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        width:'25%',
        fontFamily:'papyrus',
        color:'white',
    },
    level:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        width:'25%',
        fontFamily:'papyrus',
        color:'white',
    },
    scoreText:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
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
        margin:20,
        fontFamily:'papyrus',
        color:'white',
    },
});