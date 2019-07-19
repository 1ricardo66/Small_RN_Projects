import LinearGradient from 'react-native-linear-gradient'
import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'

export default class FraseDoDia extends Component {
  constructor(){
    super()
    this.state={
      frase:"Frase Do Dia"
    }
  }

  updateText = ()=>{
    frases = ['Strength in adversity is a form of greatness.',
  'If you don’t want to waste you life, start loving more people. A life was never wasted doing so, I’m sure.',
'Evil cannot be justified. The only thing we can do with the things that have hurt us is learn, defeat bitterness, and become more beautiful.',
'Honesty: being a slave to your fear is pitiful and so unattractive. You can’t find respect if you’re always running away. Be brave.']
    this.setState({frase:frases[Math.floor(Math.random()*4)]})

}
  render() {
    return (
      
      <LinearGradient style={{flex:1, alignContent:'center',alignItems:"center"}}colors={['purple','red']}>
        
          <ScrollView style={{flex:1}} >
            <Text style={styles.titulo}>{this.state.frase}</Text>
          </ScrollView>
          
          <Image
          style={{width: 220, height: 120}}
          source={require("./imgs/logo.png")}
        />
        <TouchableOpacity style={{paddingTop:30}}>
          <Text style={styles.btn} onPress={this.updateText}>Gerar Frase</Text>
        </TouchableOpacity>

      </LinearGradient>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'purple',
    flex: 1,

  },
  titulo: {
    fontSize: 27,
    fontWeight: '600',
    flex: 1,
    textAlign:"center",
    padding:2,
    marginBottom:10,
    textDecorationLine:"underline",
    textDecorationColor:"black",
    textDecorationStyle:"solid",
  },
  corpo:{
    flex: 2,
    paddingTop:50,
    
  },
  fim:{
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: "gray",
    flex: 0.5
  },
  btn:{
    fontSize:25,
    backgroundColor: "#e00043",
    width:220,
    textAlign:"center",
    borderRadius:30,
    alignContent:'center',
    alignItems:'center'
  }
  
});
