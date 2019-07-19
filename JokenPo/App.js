import React, {Component} from 'react';
import {View,Text, StyleSheet,Image, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class JokenPo extends Component{
  constructor(){
    var path = require("./imgs/padrao.png")
    super()
    this.state = {
      
      gameChoice:path,
      resultado:'',
      player:0,
      bot:0,

    };
  }

  randomChoice(choice){
    var num = parseInt(Math.floor(Math.random()*3));
    var choices = ["pedra","papel","tesoura"];
    var pedra = require("./imgs/pedra.png");
    var papel = require("./imgs/papel.png");
    var tesoura = require ("./imgs/tesoura.png");
    var path = [pedra,papel,tesoura];
    this.setState({gameChoice:path[num]})
    this.winner(choice,choices[num])
    
  }

  winner(userChoice,botChoice){
    var msg = ("O ganhador foi: ");
    if(userChoice ==="pedra" && botChoice==="tesoura"){
      this.setState({resultado:msg+"Player",player:this.state.player+1});
    }else if(userChoice === "papel" && botChoice==="pedra"){
      this.setState({resultado:msg+"Player",player:this.state.player+1});
    }else if(userChoice=== "tesoura" && botChoice==="papel"){
      this.setState({resultado:msg+"Player",player:this.state.player+1});
    }else if(userChoice===botChoice){
      this.setState({resultado:"Empate"});
    }else{
      this.setState({resultado:msg+"Bot",bot:this.state.bot+1});
    }
  }
  
  render(){
    return(
      <LinearGradient colors={['#00ff88','#08331f']} style={styles.background}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '200' }}>Bot: {this.state.bot}</Text>
                </View>

                <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '200', textAlign: "right" }}>Player:{this.state.player}</Text>
                </View>

            </View>
        <View style={styles.imgPadrao}>
          <Image style={styles.tamImagem} source={this.state.gameChoice}/>
        </View>

        <View style={styles.userImg} >
          
          <TouchableOpacity onPress={()=>{this.randomChoice("pedra")}} style={{paddingRight:13}}>
            <Image style={styles.tamImagem} source={require('./imgs/pedra.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.randomChoice("papel")}}>
            <Image style={styles.tamImagem} source={require('./imgs/papel.png')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.randomChoice("tesoura")}} style={{paddingLeft:13}}>
          <Image style={styles.tamImagem} source={require('./imgs/tesoura.png')}/>
          </TouchableOpacity>
        </View>

        <Text style={styles.winnerText}>{this.state.resultado}</Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  imgPadrao:{
    flex:0.1,
    paddingTop:20,
    paddingBottom:40,
    

  },
  userImg:{
    flex:1.5,
    //alignSelf:"stretch",
    flexDirection:"row",
    alignItems:"center"


  },
  tamImagem:{
    width:110,
    height:110,
  },
  winnerText:{
    fontWeight:'200',
    fontFamily: 'arial',
    textAlign:"center",
    color:"#000",
    fontSize:20,
    paddingBottom:20
  }

})



