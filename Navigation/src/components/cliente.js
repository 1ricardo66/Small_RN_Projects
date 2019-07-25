import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import {createAppContainer,createStackNavigator} from 'react-navigation'
export default class Cliente extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#323"}}>
                <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                
            </View>
        )
    }
}

Cliente.navigationOptions={
    title:"Cliente",
    //header:null
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle:{
        backgroundColor:"#323",
    }
}

