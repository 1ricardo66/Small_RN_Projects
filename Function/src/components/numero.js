import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export default (props) => (
    <View >
        <View style={styles.mainView}>
            <TextInput style={styles.numero} placeholder="N1" value={props.num1} underlineColorAndroid="#333" keyboardType="numeric"
                onChangeText={(value) => props.atualizaValor("num1",value)}

            />
            <TextInput style={styles.numero} placeholder="N2" value={props.num2} underlineColorAndroid="#333" keyboardType="numeric"
                onChangeText={(value) => props.atualizaValor("num2",value)}
            />
        </View>
    </View>
)


const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        textAlign: "center"
    },
    mainView: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})