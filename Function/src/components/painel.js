import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Entrada from './entrada'
import Operacao from './operacao'
import Comando from './comando'
class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: "", num2: "", operacao: "Soma" }
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this)
    }

    calcular() {
        var total;
        if (this.state.operacao == "Soma") {

            total = (parseFloat(this.state.num1) + parseFloat(this.state.num2)).toFixed(2)
        }

        if (this.state.operacao == "Subtração") {
            total = (parseFloat(this.state.num1) - parseFloat(this.state.num2)).toFixed(2)
        }

        if (this.state.operacao == "Multiplicação") {
            total = (parseFloat(this.state.num1) * parseFloat(this.state.num2)).toFixed(2)
        }

        if (this.state.operacao == "Divisão") {
            total = (parseFloat(this.state.num1) / parseFloat(this.state.num2)).toFixed(2)
        }

        return(alert(total))




    }

    atualizaValor(nome, valor) {
        const obj = {};
        obj[nome] = valor;
        this.setState(obj)
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao: operacao });
    }
    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor}

                />
                <Operacao operacao={this.state.operacao} atualizaOperacao={this.atualizaOperacao} />
                <Comando acao={this.calcular} />
            </View>

        )
    }
}

export { Painel };