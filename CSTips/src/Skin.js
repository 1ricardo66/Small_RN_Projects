//APRENDER A USAR O RENDER
import React, { Component } from 'react';
import { View, Button, Text, Image,ScrollView } from 'react-native';
import SkinScreen from './components/SkinScreen'
const api = require("./json")


TERMINAR

class Skin extends Component {
  constructor(props){
    super(props)
    this.state={
      guns:api.api
    }
  }
  render() {

    




    return (
      <ScrollView>
         {this.state.guns.map((guns)=>
          <SkinScreen key={guns.Img}/>
        )}
        
      </ScrollView>


    )
  }
}

Skin.navigationOptions = {
  title: 'Skin',
}


export default Skin;