import React, { Component } from 'react'
import { View, TextInput } from 'react-native'


export default class Visor extends Component{
    render(){
        
        return (
            <View>
                <TextInput
                    placeholder="Resultado"
                    editable={false}
                    style={{ height: 70, fontSize: 21 }}
                />
            </View>
        )
    }
}