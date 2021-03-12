import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
import { green } from '@material-ui/core/colors';
import {SafeAreaView, StyleSheet, Button,Text, View, Image, FlatList,TouchableOpacity,Dimensions } from 'react-native';
//dimensions: auto calculate margin\

import Card from './Card'
import ReplayIcon from '@material-ui/icons/Replay';
import uclaCover from '../../assets/images/ucla-seal.jpg'

class Landing extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            level:2,
            cardSymbols:[
                '🥑', '🍛', '💛', '💙', '😷', '🏀', '💻', '🍨',
            ],
            cardSymbolHard:[
                '🥑', '🍛', '💛', '💙', '🏆','🎬',
                '🏰',
                '🎓','🐾','🐱','🌞','☕',
            ],
            cardSymbolsInRand:[//store random generated symbols
             ],
            isOpen:[],//store true and false
            firstPickedIndex:null,
            secondPickedIndex:null,
            steps:0,
            isEnd:false,
            fontSize:30,
            buttonWidth:48,
            buttonHeight:48,
            margin:(Dimensions.get('window').width-(48*4))/(5*2),
        }
    }
    
    


    initGame =()=>{
        

        let newCardSymbols = []
        if(this.state.level ==2)
        {
            newCardSymbols = [...this.state.cardSymbols,...this.state.cardSymbols]
            this.setState({
                fontSize:30,
                buttonWidth:48,
                buttonHeight:48,
                margin:(Dimensions.get('window').width-(48*4))/(5*2),

            })
        }
        else if(this.state.level ==3)
        {
            newCardSymbols = [...this.state.cardSymbolHard,...this.state.cardSymbolHard]
            this.setState({
                fontSize:25,
                buttonWidth:40,
                buttonHeight:40,
                margin:(Dimensions.get('window').width-(20*8))/(10*2),
            })
        }
        else if(this.state.level ==1)
        {
            const rand1 = Math.floor(Math.random()*(11));
            const rand2 = Math.floor(Math.random()*(11));

            let tempCardSymbols = []
            tempCardSymbols.push(this.state.cardSymbolHard[rand1])
            tempCardSymbols.push(this.state.cardSymbolHard[rand2])

            newCardSymbols = [...tempCardSymbols,...tempCardSymbols]
            this.setState({
                fontSize:40,
                buttonWidth:70,
                buttonHeight:70,
                margin:(Dimensions.get('window').width-(20*8))/(3.5*2),
            })
        }
    
        // var shuffle = require('shuffle-array')
        let cardSymbolsInRand = this.shuffleArray(newCardSymbols)

        let isOpen=[]
        for(let i = 0;i <newCardSymbols.length;i++)
        {
            isOpen.push(false)
        }

        this.setState({
            cardSymbolsInRand:cardSymbolsInRand,
            isOpen:isOpen,
        })
    }
    componentDidMount(){
       this.initGame()
    }

    cardPressHandler =(index)=>{
        let isOpen = [...this.state.isOpen]

        //a true card cannot be open again
        if(isOpen[index])
        {
            return;
            this.setState({
                secondPickedIndex:null,
                firstPickedIndex:null,
            })
        }

        isOpen[index] = true
        this.setState({
            isOpen:isOpen,
        })

        //pick first card
        if(this.state.firstPickedIndex ==null && this.state.secondPickedIndex==null){
            this.setState({
                isOpen:isOpen,
                firstPickedIndex:index,
            })
        }
        //pick second card
        else if(this.state.firstPickedIndex !=null && this.state.secondPickedIndex==null)
        {
            this.setState({
                isOpen:isOpen,
                secondPickedIndex:index,
            })
        }

        this.setState({
            steps:this.state.steps+1,
        })
    }

    result=()=>{
        if(this.state.firstPickedIndex !=null && this.state.secondPickedIndex !=null)
        {
            //to see if the game end
            if(this.state.cardSymbolsInRand.length>0)
            {
                let totalOpens = this.state.isOpen.filter((isOpen)=>
                    {return isOpen ===true}
                )
                if(totalOpens.length ===this.state.cardSymbolsInRand.length){
                    this.setState({
                        isEnd:true,
                    })

                    // this.props.navigation.navigate('Score',{score:this.state.steps,})


                    return//no need to execute following command
                }
            }

            let firstCard = this.state.cardSymbolsInRand[this.state.firstPickedIndex]
            let secondCard = this.state.cardSymbolsInRand[this.state.secondPickedIndex]
            if(firstCard!=secondCard){
                //leave one second before flip the card
                setTimeout(()=>{
                    let isOpen = [...this.state.isOpen]
                    isOpen[this.state.firstPickedIndex] = false
                    isOpen[this.state.secondPickedIndex] = false
                    this.setState({
                        firstPickedIndex:null,
                        secondPickedIndex:null,
                        isOpen:isOpen
                    })
            },500)
            }else{
                this.setState({
                    firstPickedIndex:null,
                    secondPickedIndex:null,
                })
            }
        }
    }

    //get updATED state
    componentDidUpdate(prevProps, prevState){
        if(prevState.secondPickedIndex !=this.state.secondPickedIndex)
        {this.result()}
    }

    shuffleArray = (arr)=>{
        const newArr = arr.slice()
       
        for(let i = newArr.length - 1;i>0;i--)
        {
            const rand = Math.floor(Math.random()*(i+1));
            [newArr[i],newArr[rand]] = [newArr[rand],newArr[i]]
           
            
        }
        return newArr
    }


    resetGame=()=>{
        this.initGame()
        this.setState({
            firstPickedIndex:null,
            secondPickedIndex:null,
            steps:0,
            isEnd:false,
        })
    }


    easyMode=()=>{
        this.setState({
            level:1,
        })
        this.resetGame()
    }

    midMode=()=>{
        this.setState({
            level:2,
        })
        this.resetGame()
    }

    hardMode=()=>{
        this.setState({
            level:3,
        })
        this.resetGame()
    }
  render(){
    
    return(
      <>
        <StatusBar/>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Find the Match</Text>
                
            </View>
            <View style={styles.level}>
                <TouchableOpacity  style={styles.easy}onPress={this.easyMode}>Easy</TouchableOpacity>
                <TouchableOpacity  style={styles.mid}onPress={this.midMode} >Mid</TouchableOpacity>
                <TouchableOpacity  style={styles.hard}onPress={this.hardMode}>Hard</TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.gameboard}>
                    {/* is show true: title false:cover */}
                    {this.state.cardSymbolsInRand.map((symbol,index)=>
                     <Card key={index} onPress ={()=>this.cardPressHandler(index)} 
                     
                     style={{width:this.state.buttonWidth, 
                        height : this.state.buttonHeight,
                        backgroundColor:'#eee',
                        borderRadius:8,
                        justifyContent:'center',
                        alignItems:'center',
                        margin:this.state.margin,}}
                    
                    
                     fontSize={this.state.fontSize} title={symbol} cover='🐻' isShow={this.state.isOpen[index]}/>)} 

                     {/* <Image
                            style={{width:48, height:48,}}
                            source={uclaCover}
                     /> */}
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                   

                    {this.state.isEnd ? `Congrats! You have completed in ${this.state.steps} step(s).`
                    :`You have tried ${this.state.steps} time(s).`}
                    
                    {/* <Button
                        title='test'
                        onPress={()=>{
                            this.props.navigation.navigate('Score',{
                                score:this.state.steps,
                            })
                        }}
                    /> */}

                   
                    
                    </Text>
                    <TouchableOpacity onPress={this.resetGame} style = {styles.resetButton}>
                    <ReplayIcon  style={{ color: green[500] }} />
                </TouchableOpacity>
                {/* {this.state.isEnd? */}
                {/* // <TouchableOpacity onPress={this.resetGame} style = {styles.resetButton}> */}
                {/* //     <Text style={styles.resetText}>Try again</Text> */}

                {/* // </TouchableOpacity> */}
                {/* // :null} */}
            </View>



        </SafeAreaView>
      </>
    )

  }

}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  easy:{
    color:'#9ACD32',
    backgroundColor:'#9ACD32',
    width:'33%',
  },
  mid:{
    color:'#3CB371',
    backgroundColor:'#3CB371',
    width:'34%',
  },
  hard:{
    color:'#008000',
    backgroundColor:'#008000',
    width:'33%',
  },
  header:{
      flex:1,
    //   backgroundColor:'#536895',
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',
  },
  heading:{
    fontSize:22,
    fontWeight:'bold',
    fontFamily:'Papyrus',
    textAlign:'center',
    // color:'#FFB300',
    color:'white',
  },
  footer:{
    flex:1,
    // backgroundColor:'#536895',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  footerText:{
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontFamily:'Papyrus',
  },
  level:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:0,
  },
  main:{
    flex:3,
    backgroundColor:'white'
  },
  gameboard:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },
  button:{
    backgroundColor:'#eee',
    borderRadius:8,
    width:48,
    height:48,
    justifyContent:'center',
    alignItems:'center',
    margin:(Dimensions.get('window').width-(48*4))/(5*2),

  },
  buttonText:{
    fontSize:30,
    
    
  },
  resetButton:{
    // backgroundColor:'#eee',
    padding:8,
    borderRadius:8,
    marginTop:20,

  },
  resetText:{
    fontSize:15,
    color:'#FFB300',
    fontWeight:'bold',
  },
});