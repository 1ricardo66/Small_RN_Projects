// src/Page1.js

import React,{Component} from 'react';
import { View, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


/*const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('Skin') }
    />
  </View>
);

Home.navigationOptions = {
  title: 'Home',
}

export default Home;*/

export default class Home extends Component {
  render(){
    return(
      <View>
        <Text>Você esta na Home, MALANDRÂO!!</Text>
        <Button 
          title="Clica ai, chefe!"
          onPress={() => this.props.navigation.navigate('Skin')}
         
        />
      </View>
    )
  }
}

Home.navigationOptions={
  title:'Home'
}