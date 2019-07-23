//APRENDER A USAR O RENDER
import React, { Component } from 'react';
import { View, Button, Text, Image,ScrollView } from 'react-native';
import SkinScreen from './src/components/SkinScreen'
const api = require("./src/json")


/*const Skin = () => (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{api.api[0].Arma}</Text>
  </View>
);*/

class Skin extends Component {
  render() {

    this.state = {
      guns: api.api,
    }




    return (
      <ScrollView style={{backgroundColor:"#296a9d"}}>
        {this.state.guns.map((guns)=>{
          <SkinScreen key="guns.img"/>
        })}
      </ScrollView>


    )
  }
}

Skin.navigationOptions = {
  title: 'Skin',
}


export default Skin;