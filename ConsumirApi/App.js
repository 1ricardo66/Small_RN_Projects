import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Topo from "./src/components/topo";
import Products from "./src/components/products";
import Axios from 'axios'




export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products:[],

    };
  }

  componentDidMount(){
    Axios.get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
    .then(item=>{
      this.setState({
        products:item.data,

      })
    }).catch((err)=>console.log(err))
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      
        <ScrollView>
        <Topo />
        {this.state.products.map(item=>(<Products key={item.titulo} item={item}/>))}
        </ScrollView>

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#333"
  }
});
