import React, { Component } from 'react'
import { StyleSheet, View, Picker } from 'react-native'

export default class Operacao extends Component {
    

    render() {
        return (
            <View>
                <Picker style={styles.operacao}
                    selectedValue={this.props.operacao}
                    onValueChange={(value)=>this.props.atualizaOperacao(value)}
                >
                    <Picker.Item label="Soma" value="Soma" />
                    <Picker.Item label="Subtração" value="Subtração" />
                    <Picker.Item label="Multiplicação" value="Multiplicação" />
                    <Picker.Item label="Divisão" value="Divisão" />
                </Picker>
            </View>
        )


    }

}
const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15,
        width: 150
    }
})
