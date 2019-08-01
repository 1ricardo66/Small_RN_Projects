import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


    
 const Topo = (props)=>{  
        return (
            <View>
                <Text style={styles.topo}>Horror Movies</Text>
                <View style={styles.linha}></View>
            </View>
        )
 }

 export {Topo};

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

