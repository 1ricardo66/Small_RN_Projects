import React from 'react'
import { View, Text } from 'react-native';

const Cabecalho = (props) => {
    return (
        <View style={{ backgroundColor: "#375978",padding:10 }}>
            <Text style={{ textAlign: "center",fontSize:19 }}>Calculadora 1.0</Text>
        </View>
    )
}

export default Cabecalho;