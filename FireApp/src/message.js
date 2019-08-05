import React, { Component } from 'react'
import { View, Text, StyleSheet,Alert } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import { Input } from 'react-native-elements'
import Key from './components/fireKey'
import firebase from 'firebase'
export default class Message extends Component {
    
    constructor(){
        super();
        this.state={
            name:"",
            tel:"",
            msg:"",

        }
    }

    componentWillMount(){
        var firebaseConfig = Key.key;
        firebase.initializeApp(firebaseConfig);
    }
    getText(name,word){
        const obj ={}
        obj[name]=word
        this.setState(obj)
    }

    sendMessage(){
        var name = this.state.name;
        var tel = this.state.tel;
        var msg = this.state.msg;
        
        if(name != "" && msg != ""){
            var database = firebase.database().ref("messages");
            database.push().set({
                nome:name,
                telefone:tel,
                mensagem:msg,
            })

            this.setState({
                name:"",
                tel:"",
                msg:""
            })
            
            Alert.alert(
                "Sucesso",
                "Obrigado pelo feedback, sua mensagem foi enviada com sucesso!!",
                [{text:"Ok"}],
                {cancelable:false}
            )

        }else{
            Alert.alert(
                "Erro",
                "É necessário inserir um nome e sua mensagem!!",
                [{text:"Ok"}],
                {cancelable:false}
            )
        }

        

    }
    render() {
        //const Message = (props)=>{
        return (
            <View style={{ flex: 1, backgroundColor: "#454242" }}>
                <Text style={styles.feedback}>Aqui é onde você pode tirar duvidas e dar o seu feedback</Text>
                <Input
                    placeholder="Insira seu nome"
                    value={this.state.name}
                    onChangeText={(value)=>this.getText("name",value)}

                />

                <Input
                    placeholder="Insira seu contato (Opcional)"
                    placehold
                    keyboardType="phone-pad"
                    maxLength={16}
                    value={this.state.tel}
                    onChangeText={(value)=>this.getText("tel",value)}
                />
                <Input
                    placeholder="Insira sua mensagem"
                    multiline={true}
                    value={this.state.msg}
                    onChangeText={(value)=>this.getText("msg",value)}
                />

                <View style={{flexDirection: 'row-reverse'}}>
                    <Icon 
                        name="paper-plane"
                        size={25}
                        color="#333"
                        style={{margin:"10%"}}
                        onPress={()=>this.sendMessage()}
                    />
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    feedback:{
        fontSize:18,
        padding:40,
        fontStyle:"normal",
        fontWeight:"300"

    }
})

Message.navigationOptions = {
    title: "Feedback",
    headerStyle: {
        backgroundColor: "#161515"
    },
    headerTitleStyle: {
        color: "red"
    },
    headerTintColor: 'red',

}