import React,{Component} from 'react'
import {View,Text,web,Image,ScrollView} from 'react-native'
import Topo from './topo'
import BodyHorror from './bodyHorror'
import BodyGore from './bodyGore'
import BodyStephen from './bodyStephen'
class Main extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <ScrollView style={{flex:1,backgroundColor:"#333"}}>
        <Topo />
        <BodyHorror />
        <BodyStephen />
        <BodyGore />
      </ScrollView>

    )
  } 
}

export default Main;