import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import Axios from 'axios'

class Products extends Component {

    render() {
        return (
            <View style={styles.itens}>
                <View style={styles.foto}>
                    <Image
                        style={{ width: 100, height: 100,}}
                        source={{ uri: this.props.item.foto }}
                    />
                </View>
                <View >
                    <Text >Nome:{this.props.item.titulo} </Text>
                    <Text  >Valor: {this.props.item.valor}</Text>
                </View>
            </View>

        )
    }
} export default Products;

const styles = StyleSheet.create({
    productsTitle: {
        
        fontSize: 17,

    },
    
    desc: {
        
    },
    foto:{
        width:102,
        height:102,
        

    },
    itens:{
        flexDirection:"row",
        borderColor:"#6600cc",
        borderWidth:2,
        padding:2,
        margin:2,
        marginTop:10,
    }

})