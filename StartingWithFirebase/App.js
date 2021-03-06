import firebase from 'firebase'
import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import fireConfig from './fireConfig'
import Msg from './msg'
export default class App extends Component {
  constructor() {
    super();
    this.state = { msg: "", userName: "", texto: [] }
  }
  componentWillMount() {
    var firebaseConfig = fireConfig.config
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var msg=[]
    
  }

  
  salvarDados() {
    const nome = this.state.userName;
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    const msg = this.state.msg;
    if (nome != "" && msg != "") {
      var database = firebase.database().ref("message");
      database.push().set({
        nome: nome,
        texto: msg,
        time
      })
      this.setState({
        msg: "", userName: ""
      })
      
      //alert("Sended...")
    } else {
      alert("Type your name and the message!!")
    }
  }
  
  
  atualizaValor(nome, valor) {
    const obj = {};
    obj[nome] = valor;
    this.setState(obj)
  }
  listar() {
    
    var films=[]
    const funcionario = firebase.database().ref("message")
    funcionario.on("value",(data)=>{
      var keys = Object.keys(data.val())
      var scores = data.val()
      for(var i = 0 ; i < keys.length ; i++){
        var k = keys[i];
        var initials = scores[k].nome
        films.push({"nome":scores[k].nome,id:i,msg:scores[k].texto})
      }
      this.setState({texto:films})
      console.log(this.state.texto)
      console.log(films)
    })
    
   
  }
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: "#e4b5b2" }}>
        <Text>Type your Message</Text>

        <TextInput
          value={this.state.userName}
          placeholder="Type your name Here "
          onChangeText={(name) => this.atualizaValor("userName", name)}
          underlineColorAndroid="#c62168"
        />

        <TextInput style={styles.input}
          value={this.state.msg}
          onChangeText={(msg) => this.atualizaValor("msg", msg)}
          underlineColorAndroid="#c62168"
          placeholder="Type Your message here "
        />
        <Button
          title="Firebase"
          onPress={() => this.salvarDados()}
        />

        <View style={{ flex: 0.5 }}>

          <Button
            title="asasa"
            onPress={() => this.listar()}
          />
          
          {this.state.texto.map((data)=>(<Msg key={data.id} msg={data}/>))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    paddingRight: 10,
    lineHeight: 10,
    flex: 0.3,
    marginTop: 50,
    color: "#c62168",
    textAlignVertical: 'top'
  },
})