import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Topo extends Component{
    render(){
        return(
            <View style={styles.backgroundTopo}>
                <Text style={styles.fontTop}>🍕 Mercadinho Online</Text>
            </View>
        );
    }
}
export default Topo;

const styles = StyleSheet.create({
    backgroundTopo:{
        backgroundColor:"#ffff00",
        alignContent:"stretch",
        height:45
    },
    fontTop:{
        color:"#6d6166",
        fontSize:24,
        marginTop:5,
        paddingLeft:"2%",
        fontFamily:"serif"

    }
})
