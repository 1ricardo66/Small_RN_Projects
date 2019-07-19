import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Topo extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <Text style={styles.topo}>Horror Stories</Text>
                <View style={styles.linha}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topo: {
        color: "red",
        fontWeight: "bold",
        paddingLeft: "8%",
        paddingTop: "2%",
        paddingBottom:"2%",
        fontSize: 27,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor:"black",
        alignContent:"stretch",

    },
    linha: {
    }

})

export default Topo