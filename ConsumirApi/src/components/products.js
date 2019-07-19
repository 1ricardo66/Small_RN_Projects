import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image,Alert } from 'react-native';
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
                <View style={styles.desc} >
                    <Text style={styles.textProduct}>Nome:{this.props.item.titulo} </Text>
                    <Text style={styles.textProduct}>Local: {this.props.item.local_anuncio}</Text>
                    <Text style={{color:"red",fontSize:17}} >Valor: {this.props.item.valor}</Text>
                    <View>
                        <TouchableOpacity style={{alignContent:"flex-end",alignSelf:"flex-end",backgroundColor:"#539ccc"}}
                        onPress={()=>Alert.alert(`${(this.props.item.titulo)}`,"Produto Indisponivel"[{text:"Sair"}])}>
                            <Text >Comprar</Text>
                        </TouchableOpacity>
                    </View>
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
        marginLeft:5,
        flexWrap:"nowrap",
        flex:1
    },
    foto:{
        width:102,
        height:102,
        

    },
    itens:{
        flexDirection:"row",
        borderColor:"#696268",
        borderWidth:2,
        padding:2,
        margin:2,
        marginTop:10,
    },
    textProduct:{
        fontSize:17,
        fontFamily: 'arial',
        flexDirection:"column",
        flexWrap:"wrap"        

    }

})