import React from 'react'
import { View, Text } from 'react-native'
import Entrada from './entrada'
import Operacao from './operacao'
import Comando from './comando'
const Painel = (props) => (

    <View>
        <Entrada
            num1={props.num1}
            num2={props.num2}
            atualizaValor={props.atualizaValor}

        />
        <Operacao operacao={props.operacao} atualizaOperacao={props.atualizaOperacao} />
        <Comando acao={props.acao} />
    </View>
)


export { Painel };