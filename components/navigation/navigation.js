{/*



import {createBottomTabNavigator} from 'react-navigation-tabs'
import homepage from '../../screens/home/homepage'
import searchpage from '../../screens/search/searchpage'
import marketpage from '../../screens/market/marketpage'
import minepage from '../../screens/mine/minepage'

// create the bottom navigator components

const BottomNavigator = createBottomTabNavigator({
    Home:{
        screen:homepage,
        navigationOptions:{
            title:'Home',
        }
    },
    Search:{
        screen:searchpage,
        navigationOptions:{
            title:'Search',
        }
    },
    Market:{
        screen:marketpage,
        navigationOptions:{
            title:'Market',
        }
    },
    Mine:{
        screen:minepage,
        navigationOptions:{
            title:'Mine',
        }
    }
});

export default 

8*/}
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'

function WildernessExplorer(){
    return(
      <View>
        <Text>WildernessExplorer</Text>
        <Button
          title="Go to profile screen"
          onPress = {()=>navigation.navigate('My explorer profile')}
        />
  
      </View>
      
    );
  }

  function Profile({navigation}){
    return(
      <View>
        <Text>Proflie screen</Text>
        <Button
          title="Go to whildexploreers screen"
          onPress = {()=>navigation.goBack()}
        />
  
      </View>
      
    );
  }


function myStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Wilderness Explorer"
                component={WildernessExplorer}
            
            />
            <Stack.Screen
                name="My Exploerer Profile"
                component={Profile}
            
            />
        </Stack.Navigator>
    )
}
  export default WildernessExplorer;