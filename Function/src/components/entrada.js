import React from 'react'
import { View, StyleSheet } from 'react-native'
import Numero from './numero'
export default (props) => {

    return (
        <View>
            <Numero num1={props.num1} num2={props.num2} atualizaValor={props.atualizaValor}
            />
        </View>
    )
}
