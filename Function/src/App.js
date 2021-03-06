import React, { Component } from 'react'
import { View } from 'react-native'
import { Topo, Resultado, Painel } from './components/index'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { num1: "", num2: "", operacao: "Soma", resultado: "Resultado" }
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this)
    }

    calcular() {
        let total;
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

        return(
            this.setState({resultado:total})
        )




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
                <Topo />
                <Resultado resultado={this.state.resultado}/>
                <Painel 
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor}
                    operacao={this.state.operacao} 
                    atualizaOperacao={this.atualizaOperacao}
                    acao={this.calcular}
                />
            </View>
        )
    }

} 