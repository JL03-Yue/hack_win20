import { StatusBar } from 'expo-status-bar';
import React,{Component}from 'react';
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
            cardSymbols:[
                '🥑', '🍛', '💛', '💙', '😷', '🏀', '💻', '🍨',
            ],
            cardSymbolsInRand:[//store random generated symbols
             ],
            isOpen:[],//store true and false
            firstPickedIndex:null,
            secondPickedIndex:null,
            steps:0,
            isEnd:false,
    
        }
    }
    
    


    initGame =()=>{
        let newCardSymbols = [...this.state.cardSymbols,...this.state.cardSymbols]
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
  render(){
    let coverPath = require('C:/Users/CLICK-USER/Desktop/hacksp_win20/assets/images/ucla-cover.png');
    
    return(
      <>
        <StatusBar/>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Matching Game</Text>
                
            </View>

            <View style={styles.main}>
                <View style={styles.gameboard}>
                    {/* is show true: title false:cover */}
                    {this.state.cardSymbolsInRand.map((symbol,index)=>
                     <Card key={index} onPress ={()=>this.cardPressHandler(index)} style={styles.button} fontSize={30} title={symbol} cover='🐻' isShow={this.state.isOpen[index]}/>)} 

                     {/* <Image
                            style={{width:48, height:48,}}
                            source={uclaCover}
                     /> */}
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                   

                    {this.state.isEnd ? `Congratulations! You have completed in ${this.state.steps} step(s).`
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
                    <ReplayIcon  color="disabled" />
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
  header:{
      flex:1,
      backgroundColor:'#536895',
      justifyContent:'center',
      alignItems:'center',
  },
  heading:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    color:'#FFB300',
  },
  footer:{
    flex:1,
    backgroundColor:'#536895',
    justifyContent:'center',
    alignItems:'center',
  },
  footerText:{
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
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