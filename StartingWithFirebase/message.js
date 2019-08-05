import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
export default class Message extends Component {
    render() {
        //const Message = (props)=>{
        return (
            <View style={{ flex: 1 }}>
                <Text>OI</Text>
                <TextInput
                    placeholder="Insira seu nome"
                    underlineColorAndroid="#333"
                />

                <TextInput
                    placeholder="Insira seu contato (Opcional) +XX(XX)XXXXXXXXX"
                    underlineColorAndroid="#333"
                    keyboardType="phone-pad"
                    maxLength={16}
                />
                <TextInput
                    placeholder="Insira sua mensagem"
                    multiline={true}
                    underlineColorAndroid="#333"

                />

                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({

})